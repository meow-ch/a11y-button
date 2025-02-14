import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: number;
  active?: boolean;
  text?: string;
}

export function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 24,
  active = false,
  disabled = false,
  text,
  className,
  ...props
}: IconButtonProps) {
  const iconVars = {
    '--a11y-icon-button-gap': `${size * 0.25}px`,
    '--a11y-icon-button-min-width': text ? `${size * 2.5}px` : `${size * 1.5}px`,
    '--a11y-icon-button-height': `${size * 1.5}px`,
    '--a11y-icon-button-padding': `${size * 0.25}px ${size * 0.5}px`,
    '--a11y-icon-button-font-size': `${size * 0.75}px`,
  } as React.CSSProperties;

  return (
    <button
      {...props}
      aria-label={label}
      disabled={disabled}
      className={`${styles['a11y-button-icon']} ${active ? styles['a11y-button-icon-active'] : ''} ${className || ''}`}
      style={iconVars}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
}
