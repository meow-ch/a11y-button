import { Eye, EyeOff, PaintBucket } from 'lucide-react';
import { AccessibilitySettings } from '../types';
import { ButtonGroup } from './ui/ButtonGroup';
import { IconButton } from './ui/IconButton';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './QuickControls.module.css';

interface QuickControlsProps {
  settings: AccessibilitySettings;
  onSettingsChange: (settings: Partial<AccessibilitySettings>) => void;
  disabled: boolean;
}

export function QuickControls({ settings, onSettingsChange, disabled }: QuickControlsProps) {
  const MIN_FONT_SIZE = 12;
  const MAX_FONT_SIZE = 72;
  const { t } = useAccessibility();

  const toggleBlackAndWhite = () => {
    if (settings.blackAndWhite) {
      onSettingsChange({
        blackAndWhite: false,
        removeBackgrounds: false,
        backgroundColor: '#ffffff',
        foregroundColor: '#000000'
      });
    } else {
      onSettingsChange({
        blackAndWhite: true,
        removeBackgrounds: true,
        backgroundColor: '#ffffff',
        foregroundColor: '#000000'
      });
    }
  };

  const controlVars = {
    '--a11y-controls-gap': `${settings.fontSize * 0.5}px`,
    '--a11y-controls-opacity': disabled ? 0.5 : 1,
    '--a11y-controls-events': disabled ? 'none' : 'auto',
    '--a11y-divider-padding': `0 ${settings.fontSize * 0.5}px`,
    '--a11y-divider-margin': `${settings.fontSize * 0.25}px 0`,
    '--a11y-divider-gap': `${settings.fontSize * 0.5}px`,
  } as React.CSSProperties;

  return (
    <div className={styles['a11y-button-quick-controls']} style={controlVars}>
      <ButtonGroup gap={settings.fontSize * 0.25}>
        <IconButton
          icon={<span style={{ fontWeight: 'bold' }}>A</span>}
          text="-"
          label={t('Decrease font size')}
          onClick={() => onSettingsChange({
            fontSize: Math.max(MIN_FONT_SIZE, settings.fontSize / 1.5)
          })}
          disabled={settings.fontSize <= MIN_FONT_SIZE}
          size={settings.fontSize}
        />
        <IconButton
          icon={<span style={{ fontWeight: 'bold' }}>A</span>}
          text="+"
          label={t('Increase font size')}
          onClick={() => onSettingsChange({
            fontSize: Math.min(MAX_FONT_SIZE, settings.fontSize * 1.5)
          })}
          disabled={settings.fontSize >= MAX_FONT_SIZE}
          size={settings.fontSize}
        />
      </ButtonGroup>

      <div className={styles['a11y-button-quick-divider']}>
        <IconButton
          icon={settings.showReadingMask ?
            <EyeOff size={settings.fontSize * 1.2} /> :
            <Eye size={settings.fontSize * 1.2} />
          }
          label={t(`{{enableDisable}} reading mask`, {
            enableDisable: settings.showReadingMask ? t('Disable') : t('Enable')
          })}
          onClick={() => onSettingsChange({
            showReadingMask: !settings.showReadingMask
          })}
          size={settings.fontSize}
          active={settings.showReadingMask}
        />
        <IconButton
          icon={<PaintBucket size={settings.fontSize * 1.2} />}
          label={t(`{{enableDisable}} black and white mode`, {
            enableDisable: settings.blackAndWhite ? t('Disable') : t('Enable')
          })}
          onClick={toggleBlackAndWhite}
          size={settings.fontSize}
          active={settings.blackAndWhite}
        />
      </div>
    </div>
  );
}
