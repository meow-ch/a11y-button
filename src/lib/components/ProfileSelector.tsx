import { AccessibilityProfile, AccessibilitySettings, PROFILES } from '../types';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './ProfileSelector.module.css';

interface ProfileSelectorProps {
  currentProfile: AccessibilityProfile;
  onChange: (profile: AccessibilityProfile, settings: Partial<AccessibilitySettings>) => void;
  disabled?: boolean;
  textScaleFactor: number;
}

export function ProfileSelector({
  currentProfile,
  onChange,
  disabled,
  textScaleFactor
}: ProfileSelectorProps) {
  const { t } = useAccessibility();

  const handleChange = (profile: AccessibilityProfile) => {
    const settings = PROFILES[profile];
    onChange(profile, settings);
  };

  const profileVars = {
    '--a11y-profile-gap': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.75})`,
    '--a11y-profile-padding': `0 calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-label-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-select-padding': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.25}) calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.5})`,
    '--a11y-select-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-select-height': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 2})`,
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

