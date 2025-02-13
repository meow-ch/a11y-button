import { Settings, LucideIcon, Eye, Palette, Type, LayoutGrid, PersonStanding } from 'lucide-react';
import { ReactNode } from 'react';

interface AccessibilityButtonProps {
  isOpen: boolean;
  onClick: () => void;
  fontSize: number;
  position?: 'fixed' | 'absolute';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  borderRadius?: string;
  iconHandle?: 'settings' | 'eye' | 'palette' | 'type' | 'layout' | 'accessibility';
  children?: ReactNode;
  hideWhenOpen?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  settings: Settings,
  eye: Eye,
  accessibility: PersonStanding,
  palette: Palette,
  type: Type,
  layout: LayoutGrid
};

const SAFE_MARGIN = '1.5rem';

export function AccessibilityButton({
  isOpen,
  onClick,
  fontSize,
  position = 'absolute',
  top,
  right,
  bottom = SAFE_MARGIN,
  left,
  borderRadius = '50%',
  iconHandle = 'accessibility',
  children,
  hideWhenOpen = false
}: AccessibilityButtonProps) {
  const Icon = iconMap[iconHandle] || Settings;

  console.log(top, right, bottom, left);

  // Don't render if hideWhenOpen is true and the toolbar is open
  if ((hideWhenOpen || position === "absolute") && isOpen) {
    return null;
  }

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${fontSize * 3}px`,
    height: `${fontSize * 3}px`,
    padding: `${fontSize * 0.75}px`,
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '2px solid #000000',
    borderRadius: borderRadius,
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: position,
    top: top || (position === 'absolute' ? SAFE_MARGIN : undefined),
    right: right || (!left && position === 'fixed' ? SAFE_MARGIN : undefined),
    bottom: (position === 'fixed' ? SAFE_MARGIN : undefined),
    left: left || (position === 'absolute' ? SAFE_MARGIN : undefined),
    zIndex: 999998, // One less than toolbar to prevent overlap
    outline: 'none'
  };

  const hoverStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#000000',
    color: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-1px)'
  };

  const focusStyle: React.CSSProperties = {
    ...buttonStyle,
    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.4)'
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
      onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
      onBlur={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
      onClick={onClick}
      aria-label={`${isOpen ? 'Hide' : 'Show'} Accessibility Settings`}
    >
      {children || (
        <Icon
          style={{
            width: `${fontSize * 1.5}px`,
            height: `${fontSize * 1.5}px`
          }}
        />
      )}
    </button>
  );
}
