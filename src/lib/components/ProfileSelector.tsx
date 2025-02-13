import { AccessibilityProfile, AccessibilitySettings, PROFILES } from '../types';
import { useAccessibility } from '../context/AccessibilityContext';

interface ProfileSelectorProps {
  currentProfile: AccessibilityProfile;
  onChange: (profile: AccessibilityProfile, settings: Partial<AccessibilitySettings>) => void;
  disabled?: boolean;
  fontSize: number;
}

export function ProfileSelector({ currentProfile, onChange, disabled, fontSize }: ProfileSelectorProps) {
  const { t } = useAccessibility();
  const handleChange = (profile: AccessibilityProfile) => {
    const settings = PROFILES[profile];
    onChange(profile, settings);
  };

  return (
    <div className="flex items-center gap-3 px-4">
      <span style={{ fontSize: `${fontSize}px` }}>{t('Profile')}</span>
      <select
        value={currentProfile}
        onChange={(e) => handleChange(e.target.value as AccessibilityProfile)}
        className="border rounded"
        disabled={disabled}
        style={{ 
          padding: `${fontSize * 0.25}px ${fontSize * 0.5}px`,
          fontSize: `${fontSize}px`,
          height: `${fontSize * 2}px`
        }}
      >
        <option value="none">{t('Custom')}</option>
        <option value="clear-reading">{t('Clear Reading')}</option>
        <option value="easy-reading">{t('Easy Reading')}</option>
      </select>
    </div>
  );
}
