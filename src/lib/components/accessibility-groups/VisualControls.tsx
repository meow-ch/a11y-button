import { ControlGroup } from './ControlGroup';
import { AccessibilitySettings } from '../../types';
import { validateColorContrast } from '../../utils/color';

interface VisualControlsProps {
  settings: AccessibilitySettings;
  onUpdate: (settings: Partial<AccessibilitySettings>) => void;
  labelStyle: React.CSSProperties;
}

export function VisualControls({ settings, onUpdate, labelStyle }: VisualControlsProps) {
  const handleColorChange = async (key: 'backgroundColor' | 'foregroundColor', color: string) => {
    const otherColor = key === 'backgroundColor' ? settings.foregroundColor : settings.backgroundColor;
    const isValid = await validateColorContrast(color, otherColor);
    
    if (isValid) {
      onUpdate({ [key]: color });
    }
  };

  const controlStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: `${settings.fontSize}px`,
    padding: `${settings.fontSize * 0.5}px 0`,
  };

  const checkboxStyle: React.CSSProperties = {
    width: `${settings.fontSize * 1.5}px`,
    height: `${settings.fontSize * 1.5}px`,
    border: '2px solid #000000',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <ControlGroup title="Visual Aids" fontSize={settings.fontSize}>
      <div style={controlStyle}>
        <label style={labelStyle}>Background Color</label>
        <input
          type="color"
          value={settings.backgroundColor}
          onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
          style={{
            width: `${settings.fontSize * 2}px`,
            height: `${settings.fontSize * 2}px`,
            padding: '2px',
            border: '2px solid #000000',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        />
      </div>

      <div style={controlStyle}>
        <label style={labelStyle}>Text Color</label>
        <input
          type="color"
          value={settings.foregroundColor}
          onChange={(e) => handleColorChange('foregroundColor', e.target.value)}
          style={{
            width: `${settings.fontSize * 2}px`,
            height: `${settings.fontSize * 2}px`,
            padding: '2px',
            border: '2px solid #000000',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        />
      </div>

      {[
        { label: 'Reading Mask', key: 'showReadingMask' },
        { label: 'Remove Backgrounds', key: 'removeBackgrounds' },
        { label: 'Simplify Layout', key: 'cancelLayout' },
        { label: 'Left Align Text', key: 'leftAlignText' },
        { label: 'Number Lists', key: 'numberListItems' },
        { label: 'Highlight Links', key: 'customLinks' }
      ].map(({ label, key }) => (
        <div key={key} style={controlStyle}>
          <label style={labelStyle}>{label}</label>
          <input
            type="checkbox"
            checked={settings[key as keyof AccessibilitySettings] as boolean}
            onChange={(e) => onUpdate({ [key]: e.target.checked })}
            style={checkboxStyle}
          />
        </div>
      ))}
    </ControlGroup>
  );
}
