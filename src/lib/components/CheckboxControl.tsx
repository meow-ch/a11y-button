import styles from './CheckboxControl.module.css';

interface CheckboxControlProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  fontSize: number;
}

export function CheckboxControl({
  label,
  checked,
  onChange,
  fontSize
}: CheckboxControlProps) {
  const checkboxVars = {
    '--a11y-checkbox-gap': `${fontSize}px`,
    '--a11y-checkbox-padding': `${fontSize * 0.25}px`,
    '--a11y-checkbox-min-height': `${fontSize * 3}px`,
    '--a11y-label-font-size': `${fontSize}px`,
    '--a11y-label-min-width': `${fontSize * 7}px`,
    '--a11y-checkbox-size': `${fontSize * 1.5}px`,
  } as React.CSSProperties;

  return (
    <div
      className={styles['a11y-button-checkbox-container']}
      style={checkboxVars}
    >
      <label className={styles['a11y-button-checkbox-label']}>
        {label}
      </label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles['a11y-button-checkbox-input']}
      />
    </div>
  );
}
