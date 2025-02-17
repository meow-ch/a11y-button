import { AccessibilitySettings } from '../types';
import { TextControls } from './accessibility-groups/TextControls';
import { VisualControls } from './accessibility-groups/VisualControls';
import styles from './AccessibilityPanel.module.css';
import { getScaledFontSize } from '../utils/size';

interface AccessibilityPanelProps {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
}

export function AccessibilityPanel({ settings }: AccessibilityPanelProps) {
  const columnClassName = `${styles.column} ${
    settings.fontSizeScaleOptionIndex <= 1.4 ? styles.columnNormal : styles.columnLarge
  }`;

  const fontSize = getScaledFontSize(settings);

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
      </div>
    </div>
  );
}
