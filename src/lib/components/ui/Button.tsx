import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
  textScaleFactor?: number;
}

const sizeMap = {
  sm: 0.5,
  md: 0.75,
  lg: 1,
};

export function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  children,
  fullWidth = false,
  textScaleFactor = 1,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const buttonVars = {
    '--a11y-button-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-button-gap': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.5})`,
    '--a11y-button-padding': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * sizeMap[size]})`,
    '--a11y-button-width': fullWidth ? '100%' : 'auto',
    '--a11y-button-icon-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 1.2})`,
    '--a11y-button-focus-color': 'rgba(0, 0, 0, 0.4)',
  } as React.CSSProperties;

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${styles['a11y-button-base']} ${styles[`a11y-button-${variant}`]} ${className || ''}`}
      style={buttonVars}
    >
      {icon && (
        <span className={styles['a11y-button-icon']}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}

