import { Eye, EyeOff } from 'lucide-react';
import { AccessibilitySettings } from '../types';
import { ButtonGroup } from './ui/ButtonGroup';
import { IconButton } from './ui/IconButton';

interface QuickControlsProps {
  settings: AccessibilitySettings;
  onSettingsChange: (settings: Partial<AccessibilitySettings>) => void;
  disabled: boolean;
}

export function QuickControls({ settings, onSettingsChange, disabled }: QuickControlsProps) {
  const MIN_FONT_SIZE = 12;
  const MAX_FONT_SIZE = 72;

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: `${settings.fontSize * 0.5}px`,
      opacity: disabled ? 0.5 : 1,
      pointerEvents: disabled ? 'none' : 'auto'
    }}>
      <ButtonGroup gap={settings.fontSize * 0.25}>
        <IconButton
          icon={<span style={{ fontWeight: 'bold' }}>A</span>}
          text="-"
          label="Decrease font size"
          onClick={() => onSettingsChange({ 
            fontSize: Math.max(MIN_FONT_SIZE, settings.fontSize / 1.5)
          })}
          disabled={settings.fontSize <= MIN_FONT_SIZE}
          size={settings.fontSize}
        />
        <IconButton
          icon={<span style={{ fontWeight: 'bold' }}>A</span>}
          text="+"
          label="Increase font size"
          onClick={() => onSettingsChange({ 
            fontSize: Math.min(MAX_FONT_SIZE, settings.fontSize * 1.5)
          })}
          disabled={settings.fontSize >= MAX_FONT_SIZE}
          size={settings.fontSize}
        />
      </ButtonGroup>

      <div style={{
        borderLeft: '2px solid #000000',
        borderRight: '2px solid #000000',
        padding: `0 ${settings.fontSize * 0.5}px`,
        margin: `${settings.fontSize * 0.25}px 0`
      }}>
        <IconButton
          icon={settings.showReadingMask ? 
            <EyeOff size={settings.fontSize * 1.2} /> : 
            <Eye size={settings.fontSize * 1.2} />
          }
          label={`${settings.showReadingMask ? 'Disable' : 'Enable'} reading mask`}
          onClick={() => onSettingsChange({ 
            showReadingMask: !settings.showReadingMask 
          })}
          size={settings.fontSize}
          active={settings.showReadingMask}
        />
      </div>
    </div>
  );
}
