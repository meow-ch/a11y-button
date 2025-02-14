import { useAccessibility } from '../context/AccessibilityContext';
import styles from './Toggle.module.css';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
}

export function Toggle({ checked, onChange, size = 24 }: ToggleProps) {
  const { visibleSettings } = useAccessibility();
  const { removeBackgrounds, blackAndWhite, backgroundColor, foregroundColor } = visibleSettings;

  const width = size * 2;
  const height = size;
  const knobSize = height - 4;

  const shouldShowBorder = removeBackgrounds || blackAndWhite;

  const toggleVars = {
    '--a11y-toggle-width': `${width}px`,
    '--a11y-toggle-height': `${height}px`,
    '--a11y-toggle-knob-size': `${knobSize}px`,
    '--a11y-toggle-border': shouldShowBorder ? `2px solid ${foregroundColor}` : 'none',
    '--a11y-toggle-knob-bg': backgroundColor,
    '--a11y-toggle-knob-shadow': shouldShowBorder
      ? `0 0 0 2px ${foregroundColor}`
      : '0 2px 4px rgba(0,0,0,0.2)',
  } as React.CSSProperties;

  return (
    <button
      className={styles['a11y-button-toggle']}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={toggleVars}
    >
      <span className={styles['a11y-button-toggle-knob']} />
    </button>
  );
}
