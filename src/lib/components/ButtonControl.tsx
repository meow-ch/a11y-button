import { ReactNode } from 'react';

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

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${parseInt(labelStyle?.fontSize as string || '16') * 2}px`,
    height: `${parseInt(labelStyle?.fontSize as string || '16') * 2}px`,
    border: '1px solid currentColor',
    borderRadius: '4px',
    cursor: 'pointer',
    opacity: 1,
    transition: 'opacity 0.2s ease'
  };

  const disabledButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: 'not-allowed'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: `${parseInt(labelStyle?.fontSize as string || '16') * 0.5}px`,
      width: '100%'
    }}>
      <label style={labelStyle}>{label}</label>
      <div style={{
        display: 'flex',
        gap: `${parseInt(labelStyle?.fontSize as string || '16') * 0.5}px`,
        alignItems: 'center'
      }}>
        <button
          onClick={decrement}
          disabled={disabled || (isCustomRange ? isAtMin : value <= min)}
          style={(isCustomRange ? isAtMin : value <= min) ? disabledButtonStyle : buttonStyle}
          aria-label={`Decrease ${label}`}
        >
          {leftIcon}
        </button>
        <span style={{
          fontSize: labelStyle?.fontSize,
          minWidth: `${parseInt(labelStyle?.fontSize as string || '16') * 2}px`,
          textAlign: 'center'
        }}>
          {value}
        </span>
        <button
          onClick={increment}
          disabled={disabled || (isCustomRange ? isAtMax : value >= max)}
          style={(isCustomRange ? isAtMax : value >= max) ? disabledButtonStyle : buttonStyle}
          aria-label={`Increase ${label}`}
        >
          {rightIcon}
        </button>
      </div>
    </div>
  );
}
