import { ControlGroup } from './ControlGroup';
import { AccessibilitySettings } from '../../types';
import { validateColorContrast } from '../../utils/color';
import { useAccessibility } from '../../context/AccessibilityContext';
import styles from './VisualControls.module.css';

interface VisualControlsProps {
  settings: AccessibilitySettings;
  onUpdate: (settings: Partial<AccessibilitySettings>) => void;
}

export function VisualControls({ settings, onUpdate }: VisualControlsProps) {
  const { t } = useAccessibility();

  const handleColorChange = async (key: 'backgroundColor' | 'foregroundColor', color: string) => {
    const otherColor = key === 'backgroundColor' ? settings.foregroundColor : settings.backgroundColor;
    const isValid = await validateColorContrast(color, otherColor);

    if (isValid) {
      onUpdate({ [key]: color });
    }
  };

  const controlVars = {
    '--a11y-control-gap': `${settings.fontSize}px`,
    '--a11y-control-padding': `${settings.fontSize * 0.5}px 0`,
    '--a11y-label-font-size': `${settings.fontSize}px`,
    '--a11y-label-min-width': `${settings.fontSize * 7}px`,
    '--a11y-color-size': `${settings.fontSize * 2}px`,
    '--a11y-checkbox-size': `${settings.fontSize * 1.5}px`,
    '--a11y-border-color': settings.foregroundColor,
    '--a11y-focus-color': 'rgba(0, 0, 0, 0.4)',
  } as React.CSSProperties;

  return (
    <ControlGroup title={t('Visual Aids')} fontSize={settings.fontSize}>
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
          value={settings.foregroundColor}
          onChange={(e) => handleColorChange('foregroundColor', e.target.value)}
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
