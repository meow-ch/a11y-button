import { Settings, LucideIcon, Eye, Palette, Type, LayoutGrid, PersonStanding } from 'lucide-react';
import { ReactNode } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './AccessibilityButton.module.css';

interface AccessibilityButtonProps {
  isOpen: boolean;
  onClick: () => void;
  textScaleFactor: number;
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
  textScaleFactor,
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
  const { t } = useAccessibility();

  // Don't render if hideWhenOpen is true and the toolbar is open
  if ((hideWhenOpen || position === "absolute") && isOpen) {
    return null;
  }

  // Set CSS Custom Properties for the button
  const buttonVars = {
    '--a11y-button-position': position,
    '--a11y-button-top': top || (position === 'absolute' ? SAFE_MARGIN : undefined),
    '--a11y-button-right': right || (!left && position === 'fixed' ? SAFE_MARGIN : undefined),
    '--a11y-button-bottom': bottom || (position === 'fixed' ? SAFE_MARGIN : undefined),
    '--a11y-button-left': left || (position === 'absolute' ? SAFE_MARGIN : undefined),
    '--a11y-button-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 3})`,
    '--a11y-button-padding': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.75})`,
    '--a11y-button-radius': borderRadius,
    '--a11y-button-bg': '#ffffff',
    '--a11y-button-color': '#000000',
    '--a11y-button-border-color': '#000000',
    '--a11y-button-hover-bg': '#000000',
    '--a11y-button-hover-color': '#ffffff',
    '--a11y-button-focus-ring-color': 'rgba(0, 0, 0, 0.4)',
    '--a11y-button-icon-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 1.5})`,
  } as React.CSSProperties;

  return (
    <button
      className={styles['a11y-button-trigger']}
      style={buttonVars}
      onClick={onClick}
      aria-label={t('{{hideShow}} Accessibility Settings', {
        hideShow: isOpen ? t('Hide') : t('Show')
      })}
    >
      {children || (
        <Icon className={styles['a11y-button-icon']} />
      )}
    </button>
  );
}
