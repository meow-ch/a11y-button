import { ArrowUp, ArrowDown } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './NavigationAssistant.module.css';

export function NavigationAssistant() {
  const { visibleSettings } = useAccessibility();
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const hoveredElementRef = useRef<HTMLElement | null>(null);
  const hoverTimerRef = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const scrollAnimationRef = useRef<number | null>(null);

  // Clear hover state and any pending timer
  const clearHoverState = () => {
    if (hoveredElementRef.current) {
      hoveredElementRef.current.classList.remove(styles['nav-highlight']);
    }
    setHoveredElement(null);
    hoveredElementRef.current = null;
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    if (progressRef.current) {
      progressRef.current.style.width = '0%';
      progressRef.current.style.transition = 'none';
    }
  };

  // Returns true if the element or one of its ancestors is clickable.
  const isClickable = (element: HTMLElement): boolean => {
    if (
      element.tagName === 'A' ||
      element.tagName === 'BUTTON' ||
      element.tagName === 'INPUT' ||
      element.tagName === 'SELECT' ||
      element.onclick !== null ||
      element.getAttribute('role') === 'button'
    ) {
      return true;
    }
    let parent = element.parentElement;
    while (parent) {
      if (
        parent.tagName === 'A' ||
        parent.tagName === 'BUTTON' ||
        parent.onclick !== null ||
        parent.getAttribute('role') === 'button'
      ) {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  };

  // Walks up the DOM tree to locate a clickable element.
  const findClickableElement = (element: HTMLElement): HTMLElement | null => {
    if (isClickable(element)) {
      return element;
    }
    let parent = element.parentElement;
    while (parent) {
      if (isClickable(parent)) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  };

  // Global hover behavior (excluding elements marked with data-no-hover-click)
  useEffect(() => {
    if (!visibleSettings.easyNavigation) return;

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clickableElement = findClickableElement(target);
      if (clickableElement) {
        // Skip scroll buttons (or any element we don't want the delay on)
        if (clickableElement.hasAttribute('data-no-hover-click')) return;

        clearHoverState();
        hoveredElementRef.current = clickableElement;
        setHoveredElement(clickableElement);
        clickableElement.classList.add(styles['nav-highlight']);

        // Start the progress indicator
        if (progressRef.current) {
          progressRef.current.style.width = '0%';
          progressRef.current.style.transition = 'none';
          // Force reflow to restart transition
          progressRef.current.offsetHeight;
          progressRef.current.style.transition = `width ${visibleSettings.easyNavigationClickDelayMs}ms linear`;
          progressRef.current.style.width = '100%';
        }

        // Set timer to click the element after the timeout
        hoverTimerRef.current = window.setTimeout(() => {
          clickableElement.click();
          clearHoverState();
        }, visibleSettings.easyNavigationClickDelayMs);
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const relatedTarget = event.relatedTarget as HTMLElement;
      if (
        hoveredElementRef.current &&
        relatedTarget &&
        hoveredElementRef.current.contains(relatedTarget)
      ) {
        return;
      }
      clearHoverState();
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      clearHoverState();
    };
  }, [visibleSettings.easyNavigation]);

  // Continuous scrolling using requestAnimationFrame for smooth motion.
  const continuousScroll = useCallback((direction: 'up' | 'down') => {
    const scrollSpeed = visibleSettings.easyNavigationScrollSpeed;
    const animate = () => {
      window.scrollBy({
        top: direction === 'up' ? -scrollSpeed : scrollSpeed,
        left: 0,
        behavior: 'auto' // immediate scroll, we control smoothness via requestAnimationFrame
      });
      scrollAnimationRef.current = requestAnimationFrame(animate);
    };
    animate();
  }, [visibleSettings.easyNavigationScrollSpeed]);

  const stopScrolling = useCallback(() => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
  }, []);

  if (!visibleSettings.easyNavigation) return null;

  return (
    <>
      {hoveredElement && (
        <div className={styles['hover-progress-container']}>
          <div ref={progressRef} className={styles['hover-progress']} />
        </div>
      )}
      <div className={styles['nav-buttons']}>
        {/* Scroll Up Button */}
        <button
          data-no-hover-click="true"
          onMouseEnter={() => continuousScroll('up')}
          onMouseLeave={stopScrolling}
          className={`${styles['nav-button']} ${styles['nav-button-up']}`}
          aria-label="Scroll up"
        >
          <ArrowUp size={32} />
        </button>
        {/* Scroll Down Button */}
        <button
          data-no-hover-click="true"
          onMouseEnter={() => continuousScroll('down')}
          onMouseLeave={stopScrolling}
          className={`${styles['nav-button']} ${styles['nav-button-down']}`}
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </>
  );
}
