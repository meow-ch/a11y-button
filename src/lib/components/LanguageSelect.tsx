import { languageNames } from '../i18n/translations';
import { useAccessibility } from '../context/AccessibilityContext';
import styles from './LanguageSelect.module.css';
import { Language } from '../types';
import { useMemo } from 'react';

export function LanguageSelect({ languages } : { languages?: Language[] }) {
  const { t, setLanguage, language } = useAccessibility();
  const hash = String(languages);
  const langNamesSubset =  useMemo(() => {
    const langs = (typeof languages === 'undefined' ? Object.keys(languageNames) : languages)
    return langs.length > 1
      ? Object.entries(languageNames).filter(([k,]) => langs.includes(k as Language))
      : null;
  }, [hash]);

  return langNamesSubset && (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className={styles['a11y-button-language-select']}
      aria-label={t('language')}
    >
      {langNamesSubset.map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}
