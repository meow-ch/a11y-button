import { ControlGroup } from './ControlGroup';
import { AccessibilitySettings } from '../../types';
import { validateColorContrast } from '../../utils/color';
import { useAccessibility } from '../../context/AccessibilityContext';
import styles from './VisualControls.module.css';

export function VisualControls() {
  const { t, visibleSettings: settings, updateSettings: onUpdate } = useAccessibility();

  const handleColorChange = async (key: 'backgroundColor' | 'color', color: string) => {
    const contrastToColor = key === 'backgroundColor' ? settings.color : settings.backgroundColor;
    const isValid = !contrastToColor || await validateColorContrast(color, contrastToColor);

    if (isValid) {
      onUpdate({ [key]: color });
    }
  };

  return (
    <ControlGroup title={t('Visual Aids')}>
      <div className={styles['a11y-button-visual-control']}>
        <label className={styles['a11y-button-visual-label']}>{t('Background Color')}</label>
        <input
          type="color"
          value={settings.backgroundColor}
          onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
          className={styles['a11y-button-visual-color']}
        />
      </div>

      <div className={styles['a11y-button-visual-control']}>
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
        { label: t('Remove Backgrounds'), key: 'colorize' },
        { label: t('Simplify Layout'), key: 'cancelLayout' },
        { label: t('Left Align Text'), key: 'leftAlignText' },
        { label: t('Number Lists'), key: 'numberListItems' },
        { label: t('Black & White Images'), key: 'blackAndWhiteImages' },
        { label: t('Navigation Assistance'), key: 'easyNavigation' },
        { label: t('Highlight Links'), key: 'customLinks' }
      ].map(({ label, key }) => (
        <div key={key} className={styles['a11y-button-visual-control']}>
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
