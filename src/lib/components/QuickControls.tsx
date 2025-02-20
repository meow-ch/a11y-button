import { Eye, EyeOff, PaintBucket, RotateCcw, Save } from 'lucide-react';
import { AccessibilitySettings, fontSizeScaleOptions, FontSizeScaleOptionsIndex } from '../types';
import { IconButton } from './ui/IconButton';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './QuickControls.module.css';
import ScaleButtons from './ui/ScaleButtons';
import { useMemo } from 'react';
import { Button } from './ui/Button';

interface QuickControlsProps {
  blackAndWhiteImages: AccessibilitySettings["blackAndWhiteImages"];
  showReadingMask: AccessibilitySettings["showReadingMask"];
  onSettingsChange: (settings: Partial<AccessibilitySettings>) => void;
  disabled: boolean;
}

export function QuickControls({ showReadingMask, onSettingsChange, disabled }: QuickControlsProps) {
  const { t, visibleSettings: settings, hasChanges, rollbackChanges, commitChanges, scaledFontSize } = useAccessibility();

  const toggleColorize = () => {
    if (settings.colorize) {
      onSettingsChange({
        colorize: false,
      });
    } else {
      onSettingsChange({
        colorize: true,
      });
    }
  };

  const scaleButtons = useMemo(() => (
    <ScaleButtons
      stepsArray={fontSizeScaleOptions as unknown as number[]}
      icon={<span>A</span>}
      gapScale={0.25}
      currentIndex={settings.fontSizeScaleOptionIndex}
      onChange={(_, index) => onSettingsChange({ fontSizeScaleOptionIndex: index as FontSizeScaleOptionsIndex })}
      labelIncrease={t('Increase font size')}
      labelDecrease={t('Decrease font size')}
    />
  ), [t, onSettingsChange, settings.fontSizeScaleOptionIndex])

  const controlsClassName = `${styles['a11y-button-quick-controls']} ${disabled ? styles['a11y-button-quick-controls--disabled'] : ''}`

  const iconSize = scaledFontSize * 1.2;

  return (
    <div className={controlsClassName}>
      {scaleButtons}
      <div className={styles['a11y-button-quick-divider']}>
        <IconButton
          icon={showReadingMask ?
            <EyeOff size={iconSize} /> :
            <Eye size={iconSize} />
          }
          label={t(`{{enableDisable}} reading mask`, {
            enableDisable: showReadingMask ? t('Disable') : t('Enable')
          })}
          onClick={() => onSettingsChange({
            showReadingMask: !showReadingMask
          })}
          active={showReadingMask}
        />
        <IconButton
          icon={<PaintBucket size={iconSize} />}
          label={t(`{{enableDisable}} black and white mode`, {
            enableDisable: settings.colorize ? t('Disable') : t('Enable')
          })}
          onClick={toggleColorize}
          active={settings.colorize}
        />
      </div>
      {hasChanges && (
        <>
          <Button
            className={styles['a11y-button-toolbar-footer-button']}
            variant="ghost"
            size="sm"
            icon={<RotateCcw size={iconSize} />}
            onClick={rollbackChanges}
          >
            {t('Revert')}
          </Button>
          <Button
            className={styles['a11y-button-toolbar-footer-button']}
            size="sm"
            variant="primary"
            icon={<Save size={iconSize} />}
            onClick={commitChanges}
          >
            {t('Save Changes')}
          </Button>
        </>
      )}
    </div>
  );
}
