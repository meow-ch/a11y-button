import { ReactNode, ButtonHTMLAttributes } from 'react';

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
  ...props
}: IconButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${size * 0.25}px`,
    minWidth: text ? `${size * 2.5}px` : `${size * 1.5}px`,
    height: `${size * 1.5}px`,
    borderRadius: '4px',
    backgroundColor: active ? '#000000' : '#ffffff',
    color: active ? '#ffffff' : '#000000',
    border: '2px solid #000000',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.2s ease',
    padding: `${size * 0.25}px ${size * 0.5}px`,
    fontWeight: 600,
    fontSize: `${size * 0.75}px`,
  };

  const hoverStyles = disabled ? {} : {
    backgroundColor: '#000000',
    color: '#ffffff',
  };

  const focusStyles = {
    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.4)',
  };

  return (
    <button
      {...props}
      aria-label={label}
      disabled={disabled}
      style={baseStyles}
      onMouseOver={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, { ...baseStyles, ...hoverStyles });
        }
      }}
      onMouseOut={(e) => {
        Object.assign(e.currentTarget.style, baseStyles);
      }}
      onFocus={(e) => {
        Object.assign(e.currentTarget.style, { ...baseStyles, ...focusStyles });
      }}
      onBlur={(e) => {
        Object.assign(e.currentTarget.style, baseStyles);
      }}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
}
