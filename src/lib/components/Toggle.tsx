import { useAccessibility } from '../context/AccessibilityContext';
import styles from './Toggle.module.css';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  scale?: number;
}

export function Toggle({ checked, onChange}: ToggleProps) {
  const { visibleSettings } = useAccessibility();
  const { removeBackgrounds, blackAndWhite } = visibleSettings;
  const shouldShowBorder = removeBackgrounds || blackAndWhite;

  const className = `${styles['a11y-button-toggle']} ${shouldShowBorder ? styles['a11y-button-toggle--show-border'] : ''}`;

  return (
    <button
      className={className}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
    >
      <span className={styles['a11y-button-toggle-knob']} />
    </button>
  );
}
