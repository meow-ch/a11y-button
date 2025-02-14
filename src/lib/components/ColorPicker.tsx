import styles from './ColorPicker.module.css';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  fontSize: number;
}

export function ColorPicker({ label, value, onChange, fontSize }: ColorPickerProps) {
  const colorVars = {
    '--a11y-color-gap': `${fontSize}px`,
    '--a11y-label-font-size': `${fontSize}px`,
    '--a11y-label-min-width': `${fontSize * 7}px`,
    '--a11y-color-input-size': `${fontSize * 2}px`,
  } as React.CSSProperties;

  return (
    <div className={styles['a11y-button-color-container']} style={colorVars}>
      <label className={styles['a11y-button-color-label']}>
        {label}
      </label>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles['a11y-button-color-input']}
      />
    </div>
  );
}
