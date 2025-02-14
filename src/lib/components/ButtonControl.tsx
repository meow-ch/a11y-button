import { ReactNode } from 'react';
import styles from './ButtonControl.module.css';

interface ButtonControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  onCustomClick?: (direction: 'increase' | 'decrease') => void;
  min: number;
  max: number;
  multiplier?: number;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  labelStyle?: React.CSSProperties;
  isCustomRange?: boolean;
  isAtMin?: boolean;
  isAtMax?: boolean;
}

export function ButtonControl({ 
  label, 
  value, 
  onChange,
  onCustomClick,
  min, 
  max,
  multiplier,
  disabled,
  leftIcon,
  rightIcon,
  labelStyle,
  isCustomRange,
  isAtMin,
  isAtMax
}: ButtonControlProps) {
  const increment = () => {
    if (isCustomRange && onCustomClick) {
      onCustomClick('increase');
    } else if (multiplier) {
      const newValue = Math.min(max, value * multiplier);
      onChange(Math.round(newValue));
    }
  };

  const decrement = () => {
    if (isCustomRange && onCustomClick) {
      onCustomClick('decrease');
    } else if (multiplier) {
      const newValue = Math.max(min, value / multiplier);
      onChange(Math.round(newValue));
    }
  };

  const controlVars = {
    '--a11y-control-gap': `${parseInt(labelStyle?.fontSize as string || '16') * 0.5}px`,
    '--a11y-label-font-size': labelStyle?.fontSize,
    '--a11y-button-size': `${parseInt(labelStyle?.fontSize as string || '16') * 2}px`,
    '--a11y-value-font-size': labelStyle?.fontSize,
    '--a11y-value-min-width': `${parseInt(labelStyle?.fontSize as string || '16') * 2}px`,
  } as React.CSSProperties;

  return (
    <div className={styles['a11y-button-control']} style={controlVars}>
      <label className={styles['a11y-button-control-label']}>{label}</label>
      <div className={styles['a11y-button-control-group']}>
        <button
          className={styles['a11y-button-control-button']}
          onClick={decrement}
          disabled={disabled || (isCustomRange ? isAtMin : value <= min)}
          aria-label={`Decrease ${label}`}
        >
          {leftIcon}
        </button>
        <span className={styles['a11y-button-control-value']}>
          {value}
        </span>
        <button
          className={styles['a11y-button-control-button']}
          onClick={increment}
          disabled={disabled || (isCustomRange ? isAtMax : value >= max)}
          aria-label={`Increase ${label}`}
        >
          {rightIcon}
        </button>
      </div>
    </div>
  );
}
