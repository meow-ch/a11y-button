import { createContext, useContext, useState, ReactNode } from 'react';
import { AccessibilitySettings, AccessibilityProfile, PROFILES, FONT_OPTIONS } from '../types';

const defaultSettings: AccessibilitySettings = {
  fontSize: 16,
  wordSpacing: 3,
  letterSpacing: 2,
  lineHeight: 1.5,
  fontFamily: FONT_OPTIONS[0].value,
  textCase: 'none',
  cancelLayout: false,
  leftAlignText: false,
  numberListItems: false,
  customLinks: false,
  showReadingMask: false,
  backgroundColor: "#ffffff",
  foregroundColor: "#000000",
  removeBackgrounds: false,
  currentProfile: 'none'
};

interface AccessibilityContextType {
  visibleSettings: AccessibilitySettings;
  savedSettings: AccessibilitySettings;
  isEnabled: boolean;
  hasChanges: boolean;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  setEnabled: (enabled: boolean) => void;
  resetSettings: () => void;
  setProfile: (profile: AccessibilityProfile) => void;
  commitChanges: () => void;
  rollbackChanges: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [visibleSettings, setVisibleSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [savedSettings, setSavedSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isEnabled, setIsEnabled] = useState(true);
  const [pausedSettings, setPausedSettings] = useState<AccessibilitySettings | null>(null);

  const hasChanges = JSON.stringify(visibleSettings) !== JSON.stringify(savedSettings);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    if (isEnabled) {
      setVisibleSettings(prev => ({
        ...prev,
        ...newSettings,
        currentProfile: 'none'
      }));
    }
  };

  const setEnabled = (enabled: boolean) => {
    setIsEnabled(enabled);
    if (!enabled) {
      setPausedSettings(savedSettings);
      setVisibleSettings(defaultSettings);
      setSavedSettings(defaultSettings);
    } else if (pausedSettings) {
      setVisibleSettings(pausedSettings);
      setSavedSettings(pausedSettings);
    }
  };

  const resetSettings = () => {
    // Only update visible settings, requiring explicit save
    setVisibleSettings(defaultSettings);
  };

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

  const commitChanges = () => {
    setSavedSettings(visibleSettings);
  };

  const rollbackChanges = () => {
    setVisibleSettings(savedSettings);
  };

  return (
    <AccessibilityContext.Provider value={{
      visibleSettings: isEnabled ? visibleSettings : defaultSettings,
      savedSettings: isEnabled ? savedSettings : defaultSettings,
      isEnabled,
      hasChanges,
      updateSettings,
      setEnabled,
      resetSettings,
      setProfile,
      commitChanges,
      rollbackChanges
    }}>
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
