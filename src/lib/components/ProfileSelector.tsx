import { AccessibilityProfile, AccessibilitySettings, PROFILES } from '../types';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './ProfileSelector.module.css';

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

  const profileVars = {
    '--a11y-profile-gap': '0.75rem',
    '--a11y-profile-padding': '0 1rem',
    '--a11y-label-font-size': `${fontSize}px`,
    '--a11y-select-padding': `${fontSize * 0.25}px ${fontSize * 0.5}px`,
    '--a11y-select-font-size': `${fontSize}px`,
    '--a11y-select-height': `${fontSize * 2}px`,
  } as React.CSSProperties;

  return (
    <div className={styles['a11y-button-profile']} style={profileVars}>
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
