import { languageNames } from '../i18n/translations';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './LanguageSelect.module.css';
import { Language } from '../types';

export function LanguageSelect() {
  const { t, setLanguage, language } = useAccessibility();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className={styles['a11y-button-language-select']}
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
