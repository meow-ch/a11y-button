import { Eye, EyeOff, PaintBucket, RotateCcw, Save } from 'lucide-react';
import { AccessibilitySettings, BASE_FONT_SIZE, fontSizeScaleOptions, FontSizeScaleOptionsIndex, TextScaleFactor } from '../types';
import { IconButton } from './ui/IconButton';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './QuickControls.module.css';
import ScaleButtons from './ui/ScaleButtons';
import { useMemo } from 'react';
import { Button } from './ui/Button';

interface QuickControlsProps {
  blackAndWhiteImages: AccessibilitySettings["blackAndWhiteImages"];
  textScaleFactor: TextScaleFactor;
  showReadingMask: AccessibilitySettings["showReadingMask"];
  onSettingsChange: (settings: Partial<AccessibilitySettings>) => void;
  disabled: boolean;
}

export function QuickControls({ textScaleFactor, showReadingMask, onSettingsChange, disabled }: QuickControlsProps) {
  const { t, visibleSettings: settings, hasChanges, rollbackChanges, commitChanges } = useAccessibility();

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
      currentIndex={settings["fontSizeScaleOptionIndex"]}
      onChange={(_, index) => onSettingsChange({ fontSizeScaleOptionIndex: index as FontSizeScaleOptionsIndex })}
      labelIncrease={t('Increase font size')}
      labelDecrease={t('Decrease font size')}
    />
  ), [t, onSettingsChange, textScaleFactor])

  const controlsClassName = `${styles['a11y-button-quick-controls']} ${disabled ? styles['a11y-button-quick-controls--disabled'] : ''}`

  return (
    <div className={controlsClassName}>
      {scaleButtons}
      <div className={styles['a11y-button-quick-divider']}>
        <IconButton
          icon={showReadingMask ?
            <EyeOff size={BASE_FONT_SIZE * textScaleFactor * 1.2} /> :
            <Eye size={BASE_FONT_SIZE * textScaleFactor * 1.2} />
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
          icon={<PaintBucket size={BASE_FONT_SIZE * textScaleFactor * 1.2} />}
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
            icon={<RotateCcw />}
            onClick={rollbackChanges}
          >
            {t('Revert')}
          </Button>
          <Button
            className={styles['a11y-button-toolbar-footer-button']}
            size="sm"
            variant="primary"
            icon={<Save />}
            onClick={commitChanges}
          >
            {t('Save Changes')}
          </Button>
        </>
      )}
    </div>
  );
}
