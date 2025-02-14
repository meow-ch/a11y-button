import { createContext, useContext, useState, ReactNode, useEffect, useCallback, useMemo } from 'react';
import { AccessibilitySettings, AccessibilityProfile, PROFILES, FONT_OPTIONS, Language, DEFAULT_FONT_LABEL } from '../types';
import { translations, getTranslation } from '../i18n/translations';
import useFontOptions from '../hooks/useFontOptions';

const STORAGE_KEY = 'a11y-settings';

const defaultSettings: AccessibilitySettings = {
  fontSize: 16,
  wordSpacing: 3,
  letterSpacing: 2,
  lineHeight: 1.5,
  // saving the label instead of full option prevents rerender after website fontFamily value lodaded
  fontOptionLabel: DEFAULT_FONT_LABEL,
  textCase: 'none',
  cancelLayout: false,
  leftAlignText: false,
  numberListItems: false,
  customLinks: false,
  showReadingMask: false,
  backgroundColor: "#ffffff",
  foregroundColor: "#000000",
  removeBackgrounds: false,
  currentProfile: 'none',
  blackAndWhite: false,
  language: 'en',
};

interface StoredState {
  settings: AccessibilitySettings;
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
    settings: defaultSettings,
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
  savedSettings: AccessibilitySettings;
  language: Language;
  isEnabled: boolean;
  hasChanges: boolean;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  setEnabled: (enabled: boolean) => void;
  resetSettings: () => void;
  setProfile: (profile: AccessibilityProfile) => void;
  commitChanges: () => void;
  rollbackChanges: () => void;
  t: (key: keyof typeof translations.en, params?: Record<string, string | number>) => string;
  fontOptions: typeof FONT_OPTIONS;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const storedState = loadStoredState();
  const [visibleSettings, setVisibleSettings] = useState<AccessibilitySettings>(storedState.settings);
  const [savedSettings, setSavedSettings] = useState<AccessibilitySettings>(storedState.settings);
  const [isEnabled, setIsEnabled] = useState(storedState.isEnabled);
  const [pausedSettings, setPausedSettings] = useState<AccessibilitySettings | null>(null);
  const fontOptions = useFontOptions();
  const hasChanges = JSON.stringify(visibleSettings) !== JSON.stringify(savedSettings);

  useEffect(() => {
    saveStoredState({
      settings: savedSettings,
      isEnabled
    });
  }, [savedSettings, isEnabled]);

  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    console.log("nes settings", newSettings);
    if (Object.keys(newSettings).length === 1 && newSettings.language) {
      setVisibleSettings(prev => ({
        ...prev,
        language: newSettings.language!,
      }));
      setSavedSettings(prev => ({
        ...prev,
        language: newSettings.language!,
      }));
    } else if (isEnabled) {
      setVisibleSettings(prev => ({
        ...prev,
        ...newSettings,
        currentProfile: 'none'
      }));
    }
  }, [isEnabled]);

  const setEnabledState = useCallback((enabled: boolean) => {
    setIsEnabled(enabled);
    if (!enabled) {
      setPausedSettings(savedSettings);
      setVisibleSettings(defaultSettings);
      setSavedSettings(defaultSettings);
    } else if (pausedSettings) {
      setVisibleSettings(pausedSettings);
      setSavedSettings(pausedSettings);
    }
    // Save the enabled state immediately
    saveStoredState({
      settings: enabled && pausedSettings ? pausedSettings : defaultSettings,
      isEnabled: enabled
    });
  }, [savedSettings, defaultSettings, pausedSettings]);

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

  const language = (isEnabled ? visibleSettings.language : savedSettings.language) || defaultSettings.language;

  const t = useCallback((key: keyof typeof translations.en, params?: Record<string, string | number>) => {
    return getTranslation(language, key, params);
  }, [language]);

  const contextValue = useMemo(() => ({
    visibleSettings: isEnabled ? visibleSettings : defaultSettings,
    savedSettings: isEnabled ? savedSettings : defaultSettings,
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
  }), [
    isEnabled, visibleSettings, savedSettings,
    language, hasChanges, fontOptions,
    updateSettings, setEnabledState, resetSettings,
    setProfile, commitChanges, rollbackChanges,
    t,
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
