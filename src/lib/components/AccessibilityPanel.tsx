import { AccessibilitySettings } from '../types';
import { TextControls } from './accessibility-groups/TextControls';
import { VisualControls } from './accessibility-groups/VisualControls';
import { Button } from './ui/Button';
import { RotateCcw } from 'lucide-react';
import styles from './AccessibilityPanel.module.css';
import { useAccessibility } from '../context/AccessibilityContext';

interface AccessibilityPanelProps {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
}

export function AccessibilityPanel({ settings, updateSettings, resetSettings }: AccessibilityPanelProps) {
  const { t } = useAccessibility();
  const handleReset = () => {
    if (window.confirm(t('Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.'))) {
      resetSettings();
    }
  };

  const columnClassName = `${styles.column} ${
    settings.fontSize <= 24 ? styles.columnNormal : styles.columnLarge
  }`;

  return (
    <div 
      className={styles.panel}
      style={{
        gap: `${settings.fontSize * 2}px`,
        ['--font-size' as string]: settings.fontSize * 2
      }}
    >
      <div 
        className={columnClassName}
        style={{
          gap: `${settings.fontSize * 2}px`,
        }}
      >
        <TextControls
          settings={settings}
          onUpdate={updateSettings}
        />
      </div>
      
      <div 
        className={columnClassName}
        style={{
          gap: `${settings.fontSize * 2}px`,
        }}
      >
        <VisualControls
          settings={settings}
          onUpdate={updateSettings}
        />

        <Button
          variant="danger"
          icon={<RotateCcw size={settings.fontSize} />}
          onClick={handleReset}
          fontSize={settings.fontSize}
          fullWidth
        >
          {t('Reset All Settings')}
        </Button>
      </div>
    </div>
  );
}
