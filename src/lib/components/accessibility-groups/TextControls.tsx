import { ControlGroup } from './ControlGroup';
import { FontOptionIndex, fontSizeScaleOptions, FontSizeScaleOptionsIndex, letterSpacingScaleOptions, lineHeightScaleOptions, NumericAccessibilitySettingsProps, TextTransformOptionIndex, textTransformOptions, wordSpacingScaleOptions } from '../../types';
import { useAccessibility } from '../../context/AccessibilityContext';
import styles from './TextControls.module.css';
import ScaleButtons from '../ui/ScaleButtons';
import { getOption } from '../../utils/option';
import { useMemo } from 'react';

const controls = [
  { label: 'Word Spacing', key: 'wordSpacingScaleOptionIndex' as NumericAccessibilitySettingsProps, stepsArray: wordSpacingScaleOptions },
  { label: 'Letter Spacing', key: 'letterSpacingScaleOptionIndex' as NumericAccessibilitySettingsProps, stepsArray: letterSpacingScaleOptions },
  { label: 'Line Height', key: 'lineHeightScaleOptionIndex' as NumericAccessibilitySettingsProps, stepsArray: lineHeightScaleOptions }
] as const;

export function TextControls() {
  const { t, fontOptions, visibleSettings: settings, updateSettings: onUpdate } = useAccessibility();

  const textScaleFactor = getOption({ fontSizeScaleOptionIndex: settings.fontSizeScaleOptionIndex });

  const controlVars = useMemo(() => ({
    '--a11y-control-gap': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-control-padding': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.5}) 0`,
    '--a11y-label-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-select-padding': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.25}) calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.5})`,
    '--a11y-select-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-select-height': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 2})`,
    '--a11y-select-min-width': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 10})`,
    '--a11y-value-min-width': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 2})`,
    '--a11y-value-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
  } as React.CSSProperties), [textScaleFactor]);

  console.log("Text scale factor", textScaleFactor);

  return (
    <ControlGroup title={t('Text Readability')} textScaleFactor={settings.fontSizeScaleOptionIndex}>
      <div className={styles['a11y-button-text-control']} style={controlVars}>
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

      <div className={styles['a11y-button-text-control']} style={controlVars}>
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

      <div className={styles['a11y-button-text-control']} style={controlVars}>
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
        <div key={key} className={styles['a11y-button-text-control']} style={controlVars}>
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
