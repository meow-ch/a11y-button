import { ControlGroup } from './ControlGroup';
import { AccessibilitySettings } from '../../types';
import { validateColorContrast } from '../../utils/color';
import { useAccessibility } from '../../context/AccessibilityContext';
import styles from './VisualControls.module.css';
import { getOption } from '../../utils/option';

export function VisualControls() {
  const { t, visibleSettings: settings, updateSettings: onUpdate } = useAccessibility();

  const handleColorChange = async (key: 'backgroundColor' | 'color', color: string) => {
    const contrastToColor = key === 'backgroundColor' ? settings.color : settings.backgroundColor;
    const isValid = !contrastToColor || await validateColorContrast(color, contrastToColor);

    if (isValid) {
      onUpdate({ [key]: color });
    }
  };

  const textScaleFactor = getOption({ fontSizeScaleOptionIndex: settings.fontSizeScaleOptionIndex });

  const controlVars = {
    '--a11y-control-gap': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-control-padding': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.5}) 0`,
    '--a11y-label-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-label-min-width': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 7})`,
    '--a11y-color-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 2})`,
    '--a11y-checkbox-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 1.5})`,
    '--a11y-border-color': settings.color,
    '--a11y-focus-color': 'rgba(0, 0, 0, 0.4)',
  } as React.CSSProperties;

  return (
    <ControlGroup title={t('Visual Aids')} textScaleFactor={settings.fontSizeScaleOptionIndex}>
      <div className={styles['a11y-button-visual-control']} style={controlVars}>
        <label className={styles['a11y-button-visual-label']}>{t('Background Color')}</label>
        <input
          type="color"
          value={settings.backgroundColor}
          onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
          className={styles['a11y-button-visual-color']}
        />
      </div>

      <div className={styles['a11y-button-visual-control']} style={controlVars}>
        <label className={styles['a11y-button-visual-label']}>{t('Text Color')}</label>
        <input
          type="color"
          value={settings.color}
          onChange={(e) => handleColorChange('color', e.target.value)}
          className={styles['a11y-button-visual-color']}
        />
      </div>

      {[
        { label: t('Reading Mask'), key: 'showReadingMask' },
        { label: t('Remove Backgrounds'), key: 'removeBackgrounds' },
        { label: t('Simplify Layout'), key: 'cancelLayout' },
        { label: t('Left Align Text'), key: 'leftAlignText' },
        { label: t('Number Lists'), key: 'numberListItems' },
        { label: t('Highlight Links'), key: 'customLinks' }
      ].map(({ label, key }) => (
        <div key={key} className={styles['a11y-button-visual-control']} style={controlVars}>
          <label className={styles['a11y-button-visual-label']}>{label}</label>
          <input
            type="checkbox"
            checked={settings[key as keyof AccessibilitySettings] as boolean}
            onChange={(e) => onUpdate({ [key]: e.target.checked })}
            className={styles['a11y-button-visual-checkbox']}
          />
        </div>
      ))}
    </ControlGroup>
  );
}
