import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './IconButton.module.css';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  scale?: number;
  active?: boolean;
} & ({
  text?: string;
  icon: ReactNode;
} | {
  text: string;
  icon?: ReactNode;
})

export function IconButton({
  icon,
  label,
  variant = 'secondary',
  scale = 1.5,
  active = false,
  disabled = false,
  text,
  className,
  ...props
}: IconButtonProps) {
  const iconVars = {
    '--a11y-icon-button-gap': `calc(var(--a11y-button-base-font-size) * ${scale * 0.25})`,
    '--a11y-icon-button-min-width': text 
      ? `calc(var(--a11y-button-base-font-size) * ${scale * 2.5})` 
      : `calc(var(--a11y-button-base-font-size) * ${scale * 1.5})`,
    '--a11y-icon-button-height': `calc(var(--a11y-button-base-font-size) * ${scale * 1.5})`,
    '--a11y-icon-button-padding': `calc(var(--a11y-button-base-font-size) * ${scale * 0.25}) calc(var(--a11y-button-base-font-size) * ${scale * 0.5})`,
    '--a11y-icon-button-font-size': `calc(var(--a11y-button-base-font-size) * ${scale * 0.75})`,
  } as React.CSSProperties;

  return (
    <button
      {...props}
      aria-label={label}
      disabled={disabled}
      className={`${styles['a11y-button-button-icon']} ${active ? styles['a11y-button-button-icon-active'] : ''} ${className || ''}`}
      style={iconVars}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
}
