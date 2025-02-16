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
  const [showGapCloseButton, setShowGapCloseButton] = useState(false);
  const { visibleSettings, updateSettings, t } = useAccessibility();

  const maskHeight = useMemo(() => {
    const baseHeight = 50;
    return Math.max(baseHeight, baseHeight * (visibleSettings?.fontSizeScaleOptionIndex || 1));
  }, [visibleSettings?.fontSizeScaleOptionIndex]);

  const margin = maskHeight / 2;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY + window.scrollY,
    });

    setShowGapCloseButton(e.clientX > window.innerWidth - 100);
  }, []);

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

  const topMaskStyle = {
    bottom: `calc(100vh - ${mousePosition.y - margin}px)`,
  };

  const bottomMaskStyle = {
    top: `${mousePosition.y + margin}px`,
  };

  const gapStyle = {
    top: `${mousePosition.y - margin}px`,
    height: `${maskHeight}px`,
  };

  const closeButtonStyle = {
    top: `${mousePosition.y - margin + (maskHeight / 2)}px`,
    transform: 'translateY(-50%)',
  };

  return (
    <>
      <div className={styles['a11y-button-mask-top']} style={topMaskStyle}>
        <div className={styles['a11y-button-mask-hint']}>
          {t('Press Esc to close')}
        </div>
      </div>

      <div className={styles['a11y-button-mask-bottom']} style={bottomMaskStyle} />

      <div className={styles['a11y-button-mask-gap']} style={gapStyle} />

      {showGapCloseButton && (
        <div 
          className={styles['a11y-button-mask-close-container']} 
          style={closeButtonStyle}
        >
          <button
            onClick={() => updateSettings({ showReadingMask: false })}
            className={styles['a11y-button-mask-close-button']}
            aria-label={t('Close reading mask')}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}
