import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './IconButton.module.css';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
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
  active = false,
  disabled = false,
  text,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      aria-label={label}
      disabled={disabled}
      className={`${styles['a11y-button-button-icon']} ${active ? styles['a11y-button-button-icon-active'] : ''} ${className || ''}`}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
}
