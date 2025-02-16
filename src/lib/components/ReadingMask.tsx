import { useEffect, useState, useMemo, useCallback } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { X } from 'lucide-react';
import styles from './ReadingMask.module.css';

interface ReadingMaskProps {
  isEnabled: boolean;
}

export function ReadingMask({ isEnabled }: ReadingMaskProps) {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const { visibleSettings, updateSettings, t } = useAccessibility();

  // Determine gap (mask) height based on settings.
  const maskHeight = useMemo(() => {
    const baseHeight = 50;
    return Math.max(baseHeight, baseHeight * (visibleSettings?.fontSizeScaleOptionIndex || 1));
  }, [visibleSettings?.fontSizeScaleOptionIndex]);

  const margin = maskHeight / 2;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      updateSettings({ showReadingMask: false });
    }
  }, [updateSettings]);

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

  // Define parameters for truncating the gap.
  const threshold = 100; // if within 100px of right edge…
  // const reserveRight = 80; // …reserve 80px for the button
  const clipPath: string = `polygon(
      0 0,
      100% 0,
      100% ${mousePosition.y - margin}px,
      0% ${mousePosition.y - margin}px,
      0 ${mousePosition.y + margin}px,
      100% ${mousePosition.y + margin}px,
      100% 100%,
      0 100%
    )`;

  // Position the escape hint so it sits fully in the top mask (with some padding).
  const hintStyle = {
    top: `${mousePosition.y - margin - 30}px`,
  };

  // Position the close button at the vertical center of the gap.
  const closeButtonStyle = {
    top: `${mousePosition.y}px`,
  };

  // Render the close button only when near the right edge.
  const showCloseButton = mousePosition.x > window.innerWidth - threshold;

  return (
    <>
      {/* The overlay uses the dynamic clip-path */}
      <div className={styles['reading-mask-overlay']} style={{ clipPath }}>
        <div className={styles['reading-mask-hint']} style={hintStyle}>
          {t('Press Esc to close')}
        </div>
      </div>
      {/* Render the close button outside the overlay so it isn’t clipped */}
      {showCloseButton && (
        <div
          className={styles['reading-mask-close-container']}
          style={closeButtonStyle}
        >
          <button
            onClick={() => updateSettings({ showReadingMask: false })}
            className={styles['reading-mask-close-button']}
            aria-label={t('Close reading mask')}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}
