import { Eye, EyeOff, PaintBucket } from 'lucide-react';
import { AccessibilitySettings, BASE_FONT_SIZE, fontSizeScaleOptions, FontSizeScaleOptionsIndex, TextScaleFactor } from '../types';
import { IconButton } from './ui/IconButton';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './QuickControls.module.css';
import ScaleButtons from './ui/ScaleButtons';
import { useMemo } from 'react';

interface QuickControlsProps {
  blackAndWhite: AccessibilitySettings["blackAndWhite"];
  textScaleFactor: TextScaleFactor;
  showReadingMask: AccessibilitySettings["showReadingMask"];
  onSettingsChange: (settings: Partial<AccessibilitySettings>) => void;
  disabled: boolean;
}

export function QuickControls({ blackAndWhite, textScaleFactor, showReadingMask, onSettingsChange, disabled }: QuickControlsProps) {
  const { t, visibleSettings: settings } = useAccessibility();

  const toggleBlackAndWhite = () => {
    if (blackAndWhite) {
      onSettingsChange({
        blackAndWhite: false,
        removeBackgrounds: false,
      });
    } else {
      onSettingsChange({
        blackAndWhite: true,
        removeBackgrounds: true,
        backgroundColor: '#ffffff',
        color: '#000000'
      });
    }
  };

  const scaleButtons = useMemo(() => (
    <ScaleButtons
      stepsArray={fontSizeScaleOptions as unknown as number[]}
      icon={<span style={{ fontWeight: 'bold' }}>A</span>}
      gapScale={0.25}
      currentIndex={settings["fontSizeScaleOptionIndex"]}
      onChange={(_, index) => onSettingsChange({ fontSizeScaleOptionIndex: index as FontSizeScaleOptionsIndex })}
      labelIncrease={t('Increase font size')}
      labelDecrease={t('Decrease font size')}
      textScaleFactor={textScaleFactor}
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
          scale={textScaleFactor}
          active={showReadingMask}
        />
        <IconButton
          icon={<PaintBucket size={BASE_FONT_SIZE * textScaleFactor * 1.2} />}
          label={t(`{{enableDisable}} black and white mode`, {
            enableDisable: blackAndWhite ? t('Disable') : t('Enable')
          })}
          onClick={toggleBlackAndWhite}
          scale={textScaleFactor}
          active={blackAndWhite}
        />
      </div>
    </div>
  );
}
