import { useEffect, useState, useRef, useCallback } from 'react';

function useThrottledMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const latestPosition = useRef({ x: 0, y: 0 });

  const updatePosition = useCallback(() => {
    setPosition(latestPosition.current);
    frame.current = null;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Save latest value in a ref
      latestPosition.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY,
      };

      // Only update once per frame
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, [updatePosition]);

  return position;
}

export default useThrottledMousePosition;