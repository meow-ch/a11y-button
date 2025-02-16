import { AccessibilitySettings } from '../types';
import { TextControls } from './accessibility-groups/TextControls';
import { VisualControls } from './accessibility-groups/VisualControls';
import { Button } from './ui/Button';
import { RotateCcw } from 'lucide-react';
import styles from './AccessibilityPanel.module.css';
import { useAccessibility } from '../context/AccessibilityContext';
import { getScaledFontSize } from '../utils/size';
import { getOption } from '../utils/option';

interface AccessibilityPanelProps {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
}

export function AccessibilityPanel({ settings, resetSettings }: AccessibilityPanelProps) {
  const { t } = useAccessibility();
  const handleReset = () => {
    if (window.confirm(t('Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.'))) {
      resetSettings();
    }
  };

  const columnClassName = `${styles.column} ${
    settings.fontSizeScaleOptionIndex <= 1.4 ? styles.columnNormal : styles.columnLarge
  }`;

  const fontSize = getScaledFontSize(settings);
  const textScaleFactor = getOption({ fontSizeScaleOptionIndex: settings.fontSizeScaleOptionIndex })

  return (
    <div
      className={styles.panel}
      style={{
        gap: `${fontSize * 2}px`,
        ['--font-size' as string]: fontSize * 2
      }}
    >
      <div
        className={columnClassName}
        style={{
          gap: `${fontSize * 2}px`,
        }}
      >
        <TextControls />
      </div>

      <div
        className={columnClassName}
        style={{
          gap: `${fontSize * 2}px`,
        }}
      >
        <VisualControls />

        <Button
          variant="danger"
          icon={<RotateCcw size={fontSize} />}
          onClick={handleReset}
          textScaleFactor={textScaleFactor}
          fullWidth
        >
          {t('Reset All Settings')}
        </Button>
      </div>
    </div>
  );
}
