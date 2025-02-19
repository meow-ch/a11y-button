import { AccessibilityProfile, AccessibilitySettings, PROFILES } from '../types';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './ProfileSelector.module.css';

interface ProfileSelectorProps {
  currentProfile: AccessibilityProfile;
  onChange: (profile: AccessibilityProfile, settings: Partial<AccessibilitySettings>) => void;
  disabled?: boolean;
}

export function ProfileSelector({
  currentProfile,
  onChange,
  disabled,
}: ProfileSelectorProps) {
  const { t } = useAccessibility();

  const handleChange = (profile: AccessibilityProfile) => {
    const settings = PROFILES[profile];
    onChange(profile, settings);
  };

  return (
    <div className={styles['a11y-button-profile']}>
      <span className={styles['a11y-button-profile-label']}>
        {t('Profile')}
      </span>
      <select
        value={currentProfile}
        onChange={(e) => handleChange(e.target.value as AccessibilityProfile)}
        disabled={disabled}
        className={styles['a11y-button-profile-select']}
      >
        <option value="none">{t('Custom')}</option>
        <option value="clear-reading">{t('Clear Reading')}</option>
        <option value="easy-reading">{t('Easy Reading')}</option>
      </select>
    </div>
  );
}

