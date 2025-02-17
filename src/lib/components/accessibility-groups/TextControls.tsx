import { ControlGroup } from './ControlGroup';
import { FontOptionIndex, fontSizeScaleOptions, FontSizeScaleOptionsIndex, letterSpacingScaleOptions, lineHeightScaleOptions, NumericAccessibilitySettingsProps, TextTransformOptionIndex, textTransformOptions, wordSpacingScaleOptions } from '../../types';
import { useAccessibility } from '../../context/AccessibilityContext';
import styles from './TextControls.module.css';
import ScaleButtons from '../ui/ScaleButtons';
import { getOption } from '../../utils/option';

const controls = [
  { label: 'Word Spacing', key: 'wordSpacingScaleOptionIndex' as NumericAccessibilitySettingsProps, stepsArray: wordSpacingScaleOptions },
  { label: 'Line Height', key: 'lineHeightScaleOptionIndex' as NumericAccessibilitySettingsProps, stepsArray: lineHeightScaleOptions },
  { label: 'Letter Spacing', key: 'letterSpacingScaleOptionIndex' as NumericAccessibilitySettingsProps, stepsArray: letterSpacingScaleOptions },
] as const;

export function TextControls() {
  const { t, fontOptions, visibleSettings: settings, updateSettings: onUpdate } = useAccessibility();

  const textScaleFactor = getOption({ fontSizeScaleOptionIndex: settings.fontSizeScaleOptionIndex });

  console.log("Text scale factor", textScaleFactor);

  return (
    <ControlGroup title={t('Text Readability')}>
      <div className={styles['a11y-button-text-control']}>
        <label className={styles['a11y-button-text-label']}>{t('Font Size')}</label>
        <ScaleButtons
          stepsArray={fontSizeScaleOptions as unknown as number[]}
          icon={<span style={{ fontWeight: 'bold' }}>A</span>}
          gapScale={0.25}
          currentIndex={settings["fontSizeScaleOptionIndex"]}
          onChange={(_, index) => onUpdate({ fontSizeScaleOptionIndex: index as FontSizeScaleOptionsIndex })}
          labelIncrease={t('Increase font size')}
          labelDecrease={t('Decrease font size')}
          textScaleFactor={textScaleFactor}
        />
      </div>

      <div className={styles['a11y-button-text-control']}>
        <label className={styles['a11y-button-text-label']}>{t('Font Family')}</label>
        <select
          value={settings.fontOptionIndex}
          onChange={(e) => onUpdate({ fontOptionIndex: parseInt(e.target.value) as FontOptionIndex })}
          className={styles['a11y-button-text-select']}
        >
          {fontOptions.map((font, i) => (
            <option
              key={font.label}
              value={i}
              style={{ fontFamily: font.value }}
            >
              {font.label} - {t(font.description)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles['a11y-button-text-control']}>
        <label className={styles['a11y-button-text-label']}>{t('Text Case')}</label>
        <select
          value={settings.textTransformOptionIndex}
          onChange={(e) => onUpdate({ textTransformOptionIndex: parseInt(e.target.value) as TextTransformOptionIndex })}
          className={styles['a11y-button-text-select']}
        >
          {textTransformOptions.map((o, i) => (
            <option key={o.value} value={i}>{t(o.label)}</option>
          ))}
        </select>
      </div>
      {controls.map(({ label, key, stepsArray }) => (
        <div key={key} className={styles['a11y-button-text-control']}>
          <label className={styles['a11y-button-text-label']}>{t(label)}</label>
          <ScaleButtons
            stepsArray={stepsArray as unknown as number[]}
            gapScale={settings.fontSizeScaleOptionIndex * 0.5}
            currentIndex={settings[key]}
            onChange={(_, index) => onUpdate({ [key]: index })}
            labelIncrease={t('Increase {{label}}', { label })}
            labelDecrease={t('Decrease {{label}}', { label })}
            textScaleFactor={textScaleFactor}
          />
        </div>
      ))}
    </ControlGroup>
  );
}
