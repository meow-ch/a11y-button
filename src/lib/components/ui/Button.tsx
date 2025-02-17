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
  const classNames = `${styles['a11y-button-base']} ${styles[`a11y-button-base--${size}`]} ${styles[`a11y-button-base--${fullWidth ? 'full-width' : ''}`]} ${styles[`a11y-button-${variant}`]} ${className || ''}`;

  return (
    <button
      {...props}
      disabled={disabled}
      className={classNames}
    >
      {icon && (
        <span className={styles['a11y-button-button-icon']}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}

