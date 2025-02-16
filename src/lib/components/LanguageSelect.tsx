import { languageNames } from '../i18n/translations';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './LanguageSelect.module.css';
import { Language } from '../types';

interface LanguageSelectProps {
  textScaleFactor?: number;
}

export function LanguageSelect({
  textScaleFactor = 1
}: LanguageSelectProps) {
  const { t, setLanguage, language } = useAccessibility();

  const selectVars = {
    '--a11y-select-padding': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.25}) calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.5})`,
    '--a11y-select-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor})`,
    '--a11y-select-height': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 2})`,
  } as React.CSSProperties;

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className={styles['a11y-button-language-select']}
      style={selectVars}
      aria-label={t('language')}
    >
      {Object.entries(languageNames).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}
