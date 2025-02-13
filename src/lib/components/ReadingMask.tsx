import { useEffect, useState, useMemo } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';

interface ReadingMaskProps {
  isEnabled: boolean;
}

export function ReadingMask({ isEnabled }: ReadingMaskProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [documentHeight, setDocumentHeight] = useState(0);
  const { visibleSettings } = useAccessibility();

  // Calculate mask height once based on font size, with fallback
  const maskHeight = useMemo(() => {
    const fontSize = visibleSettings?.fontSize ?? 16;
    const baseHeight = 50; // Base height at 16px font size
    const scaleFactor = fontSize / 16;
    return Math.max(baseHeight, baseHeight * scaleFactor);
  }, [visibleSettings?.fontSize]);

  useEffect(() => {
    if (!isEnabled) return;

    const updateDocumentHeight = () => {
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );
      setDocumentHeight(height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY
      });
    };

    // Initial height
    updateDocumentHeight();

    // Update height on window resize
    window.addEventListener('resize', updateDocumentHeight);
    // Update height on content changes
    const resizeObserver = new ResizeObserver(updateDocumentHeight);
    resizeObserver.observe(document.documentElement);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', updateDocumentHeight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateDocumentHeight);
      window.removeEventListener('scroll', updateDocumentHeight);
      resizeObserver.disconnect();
    };
  }, [isEnabled]);

  if (!isEnabled || !visibleSettings) return null;

  const maskStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    pointerEvents: 'none',
    zIndex: 999999,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  return (
    <>
      {/* Top mask */}
      <div
        style={{
          ...maskStyle,
          top: 0,
          height: `${Math.max(0, mousePosition.y - maskHeight/2)}px`,
        }}
      />
      {/* Reading line area (transparent) */}
      <div
        style={{
          ...maskStyle,
          top: `${mousePosition.y - maskHeight/2}px`,
          height: `${maskHeight}px`,
          backgroundColor: 'transparent',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      />
      {/* Bottom mask */}
      <div
        style={{
          ...maskStyle,
          top: `${mousePosition.y + maskHeight/2}px`,
          height: `${documentHeight - (mousePosition.y + maskHeight/2)}px`,
        }}
      />
    </>
  );
}
