import { defaultSettings, useAccessibility } from '../context/AccessibilityContext';
import styles from './Toggle.module.css';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  scale?: number;
}

export function Toggle({ checked, onChange, scale = 1.5}: ToggleProps) {
  const { visibleSettings } = useAccessibility();
  const { removeBackgrounds, blackAndWhite, backgroundColor, color } = visibleSettings;

  const widthFactor = scale * 2;
  const heightFactor = scale;
  // knobSize should be a factor too, 4px should become relative to base font size
  const knobSizeFactor = heightFactor - (4 / 16); // converting 4px to rem factor

  const shouldShowBorder = removeBackgrounds || blackAndWhite;

  const toggleVars = {
    '--a11y-toggle-width': `calc(var(--a11y-button-base-font-size) * ${widthFactor})`,
    '--a11y-toggle-height': `calc(var(--a11y-button-base-font-size) * ${heightFactor})`,
    '--a11y-toggle-knob-size': `calc(var(--a11y-button-base-font-size) * ${knobSizeFactor})`,
    '--a11y-toggle-border': shouldShowBorder ? `2px solid ${color || defaultSettings.color!}` : 'none',
    '--a11y-toggle-knob-bg': backgroundColor || defaultSettings.backgroundColor!,
    '--a11y-toggle-knob-shadow': shouldShowBorder
      ? `0 0 0 2px ${color || defaultSettings.color!}`
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
