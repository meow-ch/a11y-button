import { Settings, LucideIcon, Eye, Palette, Type, LayoutGrid, PersonStanding } from 'lucide-react';
import { ReactNode } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './AccessibilityButton.module.css';

interface AccessibilityButtonProps {
  isOpen: boolean;
  onClick: () => void;
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
  position = 'absolute',
  top,
  right,
  bottom,
  left,
  borderRadius = '50%',
  iconHandle = 'accessibility',
  children,
  hideWhenOpen = false
}: AccessibilityButtonProps) {
  const Icon = iconMap[iconHandle] || Settings;
  const { t, scaledFontSize } = useAccessibility();

  // Don't render if hideWhenOpen is true and the toolbar is open
  if ((hideWhenOpen || position === "absolute") && isOpen) {
    return null;
  }

  console.log("BUTTON", top, right, bottom, left);
  const buttonStyle = {
    position,
    top: top || (position === 'absolute' ? SAFE_MARGIN : undefined),
    right: right || (!left && position === 'fixed' ? SAFE_MARGIN : undefined),
    bottom: bottom || (position === 'fixed' ? SAFE_MARGIN : undefined),
    left: left || (position === 'absolute' ? SAFE_MARGIN : undefined),
    borderRadius,
  } as React.CSSProperties;

  return (
    <button
      className={styles['a11y-button-trigger-button']}
      style={buttonStyle}
      onClick={onClick}
      aria-label={t('{{hideShow}} Accessibility Settings', {
        hideShow: isOpen ? t('Hide') : t('Show')
      })}
    >
      {children || (
        <Icon size={scaledFontSize * 1.2} className={styles['a11y-button-trigger-button-icon']} />
      )}
    </button>
  );
}
