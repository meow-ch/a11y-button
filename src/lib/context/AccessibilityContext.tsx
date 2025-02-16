import { createContext, useContext, useState, ReactNode, useEffect, useCallback, useMemo } from 'react';
import { AccessibilitySettings, AccessibilityProfile, PROFILES, Language, DEFAULT_FONT_OPTION_INDEX, FontFamilyOptions } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import useFontOptions from '../hooks/useFontOptions';

const STORAGE_KEY = 'a11y-settings';

export const defaultSettings: AccessibilitySettings = {
  fontSizeScaleOptionIndex: 1,
  wordSpacingScaleOptionIndex: 0,
  letterSpacingScaleOptionIndex: 0,
  lineHeightScaleOptionIndex: 0,
  textTransformOptionIndex: 0,
  // saving the label instead of full option prevents rerender after website fontFamily value lodaded
  fontOptionIndex: DEFAULT_FONT_OPTION_INDEX,
  currentProfile: 'none',
  showReadingMask: false,
  blackAndWhite: false,
  removeBackgrounds: false,
  cancelLayout: false,
  leftAlignText: false,
  numberListItems: false,
  customLinks: false,
  backgroundColor: undefined,
  color: undefined,
};

interface StoredState {
  settings: AccessibilitySettings | null;
  language: Language;
  isEnabled: boolean;
}

function loadStoredState(): StoredState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (
        parsed.settings &&
        Object.keys(parsed.settings).sort().join(',') === Object.keys(defaultSettings).sort().join(',')
      ) {
        return parsed;
      } else {
        console.warn('Stored settings are invalid or outdated. Resetting to default.');
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  } catch (error) {
    console.error('Failed to load accessibility settings:', error);
  }

  return {
    settings: null,
    language: 'en',
    isEnabled: true
  };
}

function saveStoredState(state: StoredState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save accessibility settings:', error);
  }
}

interface AccessibilityContextType {
  visibleSettings: AccessibilitySettings;
  language: Language;
  isEnabled: boolean;
  hasChanges: boolean;
  setLanguage: (language: Language) => void;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  setEnabled: (enabled: boolean) => void;
  resetSettings: () => void;
  setProfile: (profile: AccessibilityProfile) => void;
  commitChanges: () => void;
  rollbackChanges: () => void;
  t: (key: keyof typeof translations.en, params?: Record<string, string | number>) => string;
  fontOptions: FontFamilyOptions;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const storedState = loadStoredState();
  const [language, setLanguage] = useState<Language>(storedState.language);
  const [visibleSettings, setVisibleSettings] = useState<AccessibilitySettings | null>(storedState.settings || defaultSettings);
  const [savedSettings, setSavedSettings] = useState<AccessibilitySettings | null>(storedState.settings);
  const [isEnabled, setIsEnabled] = useState(storedState.isEnabled);
  const [pausedSettings, setPausedSettings] = useState<AccessibilitySettings | null>(null);
  const fontOptions = useFontOptions();
  const hasChanges = JSON.stringify(visibleSettings) !== JSON.stringify(savedSettings);

  useEffect(() => {
    saveStoredState({
      settings: savedSettings,
      isEnabled,
      language
    });
  }, [savedSettings, isEnabled, language]);

  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    console.log("nes settings", newSettings);
    console.log("isen", isEnabled);
    console.log("sett", visibleSettings);
    if (isEnabled) {
      setVisibleSettings(prev => (prev && {
        ...prev,
        ...newSettings,
        currentProfile: 'none'
      } || null));
    }
  }, [isEnabled]);

  const setEnabledState = useCallback((isEnabled: boolean) => {
    setIsEnabled(isEnabled);
    if (!isEnabled) {
      setPausedSettings(savedSettings);
      setVisibleSettings(defaultSettings);
      setSavedSettings(defaultSettings);
    } else if (pausedSettings) {
      setVisibleSettings(pausedSettings);
      setSavedSettings(pausedSettings);
    }
    // Save the enabled state immediately
    saveStoredState({
      settings: isEnabled && pausedSettings ? pausedSettings : defaultSettings,
      isEnabled,
      language
    });
  }, [savedSettings, defaultSettings, pausedSettings, language]);

  const resetSettings = useCallback(() => {
    setVisibleSettings(defaultSettings);
  }, [defaultSettings]);

  const setProfile = (profile: AccessibilityProfile) => {
    if (profile === 'none') {
      setVisibleSettings(defaultSettings);
    } else {
      const profileSettings = PROFILES[profile];
      setVisibleSettings({
        ...defaultSettings,
        ...profileSettings,
        currentProfile: profile
      });
    }
  };

  const commitChanges = useCallback(() => {
    setSavedSettings(visibleSettings);
    // Settings are automatically saved via useEffect
  }, [visibleSettings]);

  const rollbackChanges = useCallback(() => {
    setVisibleSettings(savedSettings);
  }, [savedSettings]);

  const t = useCallback((key: keyof typeof translations.en, params?: Record<string, string | number>) => {
    return getTranslation(language, key, params);
  }, [language]);

  const contextValue = useMemo(() => ({
    visibleSettings: isEnabled && visibleSettings || defaultSettings,
    language,
    isEnabled,
    hasChanges,
    fontOptions,
    updateSettings,
    setEnabled: setEnabledState,
    resetSettings,
    setProfile,
    commitChanges,
    rollbackChanges,
    t,
    setLanguage,
  }), [
    isEnabled, visibleSettings, savedSettings,
    language, hasChanges, fontOptions,
    updateSettings, setEnabledState, resetSettings,
    setProfile, commitChanges, rollbackChanges,
    t,
    setLanguage,
  ]);

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
