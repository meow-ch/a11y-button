import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
  fontSize?: number;
}

const variants = {
  primary: {
    background: '#000000',
    color: '#ffffff',
    border: '2px solid #000000',
  },
  secondary: {
    background: '#ffffff',
    color: '#000000',
    border: '2px solid #000000',
  },
  danger: {
    background: '#ffffff',
    color: '#000000',
    border: '2px solid #000000',
  },
  ghost: {
    background: '#ffffff',
    color: '#000000',
    border: '2px solid #000000',
  },
};

const sizes = {
  sm: {
    padding: '0.5rem',
    fontSize: '0.875rem',
  },
  md: {
    padding: '0.75rem',
    fontSize: '1rem',
  },
  lg: {
    padding: '1rem',
    fontSize: '1.125rem',
  },
};

export function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  children,
  fullWidth = false,
  fontSize = 16,
  disabled,
  ...props
}: ButtonProps) {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${fontSize * 0.5}px`,
    borderRadius: '4px',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    position: 'relative',
    outline: 'none',
    fontSize: `${fontSize}px`,
    padding: sizeStyles.padding,
    backgroundColor: variantStyles.background,
    color: variantStyles.color,
    border: variantStyles.border,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  const hoverStyles = disabled ? {} : {
    backgroundColor: variantStyles.color,
    color: variantStyles.background,
  };

  const focusStyles = {
    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.4)',
  };

  return (
    <button
      {...props}
      disabled={disabled}
      style={baseStyles}
      onMouseOver={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, hoverStyles);
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
      {icon && (
        <span style={{ 
          display: 'flex', 
          alignItems: 'center',
          fontSize: `${fontSize * 1.2}px`
        }}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
