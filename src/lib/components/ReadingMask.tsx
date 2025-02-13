import { useEffect, useState, useMemo, useCallback } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { X } from 'lucide-react';

interface ReadingMaskProps {
  isEnabled: boolean;
}

export function ReadingMask({ isEnabled }: ReadingMaskProps) {
  // Start with the mouse centered in the viewport.
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  // State to control showing the close button inside the gap.
  const [showGapCloseButton, setShowGapCloseButton] = useState(false);
  const { visibleSettings, updateSettings, t } = useAccessibility();

  // Determine the reading gap (line) height based on font size with fallback.
  const maskHeight = useMemo(() => {
    const fontSize = visibleSettings?.fontSize ?? 16;
    const baseHeight = 50; // Base reading line height in pixels.
    const scaleFactor = fontSize / 16;
    return Math.max(baseHeight, baseHeight * scaleFactor);
  }, [visibleSettings?.fontSize]);

  // Define margin as half the reading line height.
  const margin = maskHeight / 2;

  // Update mouse position and determine if we should show the close button.
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });

    // Show the close button if the mouse is in the rightmost 100px.
    if (e.clientX > window.innerWidth - 100) {
      setShowGapCloseButton(true);
    } else {
      setShowGapCloseButton(false);
    }
  }, []);

  // Close the reading mask on Escape.
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        updateSettings({ showReadingMask: false });
      }
    },
    [updateSettings]
  );

  useEffect(() => {
    if (!isEnabled) return;
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEnabled, handleMouseMove, handleKeyDown]);

  if (!isEnabled || !visibleSettings) return null;

  // Compute positions:
  // - The top mask's bottom edge is set to (mousePosition.y - margin)
  // - The bottom mask's top edge is set to (mousePosition.y + margin)
  // - The gap's top edge is at (mousePosition.y - margin)
  const topMaskBottom = `calc(100vh - ${mousePosition.y - margin}px)`;
  const bottomMaskTop = `${mousePosition.y + margin}px`;
  const gapTop = mousePosition.y - margin;

  return (
    <>
      {/* Top mask with persistent "Press Esc to close" text */}
      <div
        className="a11y-reading-mask-top"
        style={{
          position: 'fixed',
          left: 0,
          width: '100%',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 999998,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          bottom: topMaskBottom,
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            color: '#ffffff',
            fontSize: '16px',
            pointerEvents: 'auto',
          }}
        >
          {t('Press Esc to close')}
        </div>
      </div>

      {/* Bottom mask */}
      <div
        className="a11y-reading-mask-bottom"
        style={{
          position: 'fixed',
          left: 0,
          width: '100%',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 999998,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          top: bottomMaskTop,
        }}
      />

      {/* Gap element: click-through because pointerEvents is 'none' */}
      <div
        className="a11y-reading-mask-gap"
        style={{
          position: 'fixed',
          left: 0,
          top: gapTop,
          width: '100%',
          height: maskHeight,
          pointerEvents: 'none',
          zIndex: 999999,
        }}
      />

      {/* Close button rendered separately so it can capture pointer events */}
      {showGapCloseButton && (
        <div
          style={{
            position: 'fixed',
            right: '20px',
            top: gapTop + maskHeight / 2,
            transform: 'translateY(-50%)',
            zIndex: 1000000,
            pointerEvents: 'auto',
          }}
        >
          <button
            onClick={() => updateSettings({ showReadingMask: false })}
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '20px',
              color: '#ffffff',
            }}
            aria-label={t('Close reading mask')}
          >
            <X size={24} />
          </button>
        </div>
      )}

      <style>
        {`
          .a11y-reading-mask-top,
          .a11y-reading-mask-bottom {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }
          .a11y-reading-mask-gap {
            background-color: transparent !important;
          }
        `}
      </style>
    </>
  );
}
