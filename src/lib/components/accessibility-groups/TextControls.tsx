import { ControlGroup } from './ControlGroup';
import { AccessibilitySettings, FontOptionLabel, TextCase } from '../../types';
import { IconButton } from '../ui/IconButton';
import { ButtonGroup } from '../ui/ButtonGroup';
import { useAccessibility } from '../../context/AccessibilityContext';
import styles from './TextControls.module.css';

interface TextControlsProps {
  settings: AccessibilitySettings;
  onUpdate: (settings: Partial<AccessibilitySettings>) => void;
}

export function TextControls({ settings, onUpdate }: TextControlsProps) {
  const { t, fontOptions } = useAccessibility();

  const handleFontSizeChange = (increase: boolean) => {
    const FONT_SIZES = [16, 24, 36, 54, 72];
    const currentIndex = FONT_SIZES.indexOf(settings.fontSize);
    const newIndex = increase ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= 0 && newIndex < FONT_SIZES.length) {
      onUpdate({ fontSize: FONT_SIZES[newIndex] });
    }
  };

  const controlVars = {
    '--a11y-control-gap': `${settings.fontSize}px`,
    '--a11y-control-padding': `${settings.fontSize * 0.5}px 0`,
    '--a11y-label-font-size': `${settings.fontSize}px`,
    '--a11y-select-padding': `${settings.fontSize * 0.25}px ${settings.fontSize * 0.5}px`,
    '--a11y-select-font-size': `${settings.fontSize}px`,
    '--a11y-select-height': `${settings.fontSize * 2}px`,
    '--a11y-select-min-width': `${settings.fontSize * 10}px`,
    '--a11y-value-min-width': `${settings.fontSize * 2}px`,
    '--a11y-value-font-size': `${settings.fontSize}px`,
  } as React.CSSProperties;

  return (
    <ControlGroup title={t('Text Readability')} fontSize={settings.fontSize}>
      <div className={styles['a11y-button-text-control']} style={controlVars}>
        <label className={styles['a11y-button-text-label']}>{t('Font Size')}</label>
        <ButtonGroup gap={settings.fontSize * 0.5}>
          <IconButton
            icon={<span style={{ fontWeight: 'bold' }}>A</span>}
            text="-"
            label={t('Decrease font size')}
            onClick={() => handleFontSizeChange(false)}
            disabled={settings.fontSize <= 16}
            size={settings.fontSize}
          />
          <span className={styles['a11y-button-text-value']}>
            {settings.fontSize}
          </span>
          <IconButton
            icon={<span style={{ fontWeight: 'bold' }}>A</span>}
            text="+"
            label={t('Increase font size')}
            onClick={() => handleFontSizeChange(true)}
            disabled={settings.fontSize >= 72}
            size={settings.fontSize}
          />
        </ButtonGroup>
      </div>

      <div className={styles['a11y-button-text-control']} style={controlVars}>
        <label className={styles['a11y-button-text-label']}>{t('Font Family')}</label>
        <select
          value={settings.fontOptionLabel}
          onChange={(e) => onUpdate({ fontOptionLabel: e.target.value as FontOptionLabel })}
          className={styles['a11y-button-text-select']}
        >
          {fontOptions.map(font => (
            <option
              key={font.label}
              value={font.label}
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
          value={settings.textCase}
          onChange={(e) => onUpdate({ textCase: e.target.value as TextCase })}
          className={styles['a11y-button-text-select']}
        >
          <option value="none">{t('Normal Case')}</option>
          <option value="uppercase">{t('UPPERCASE')}</option>
          <option value="lowercase">{t('lowercase')}</option>
          <option value="capitalize">{t('Capitalize Words')}</option>
        </select>
      </div>

      {[
        { label: t('Word Spacing'), key: 'wordSpacing', min: 0, max: 16 },
        { label: t('Letter Spacing'), key: 'letterSpacing', min: 0, max: 8 },
        { label: t('Line Height'), key: 'lineHeight', min: 1, max: 3 }
      ].map(({ label, key, min, max }) => (
        <div key={key} className={styles['a11y-button-text-control']} style={controlVars}>
          <label className={styles['a11y-button-text-label']}>{label}</label>
          <ButtonGroup gap={settings.fontSize * 0.5}>
            <IconButton
              icon={<span>-</span>}
              label={t('Decrease {{label}}', { label })}
              onClick={() => onUpdate({ [key]: Math.max(min, settings[key as keyof AccessibilitySettings] as number - 1) })}
              disabled={settings[key as keyof AccessibilitySettings] as number <= min}
              size={settings.fontSize}
            />
            <span className={styles['a11y-button-text-value']}>
              {settings[key as keyof AccessibilitySettings]}
            </span>
            <IconButton
              icon={<span>+</span>}
              label={t('Increase {{label}}', { label })}
              onClick={() => onUpdate({ [key]: Math.min(max, settings[key as keyof AccessibilitySettings] as number + 1) })}
              disabled={settings[key as keyof AccessibilitySettings] as number >= max}
              size={settings.fontSize}
            />
          </ButtonGroup>
        </div>
      ))}
    </ControlGroup>
  );
}
