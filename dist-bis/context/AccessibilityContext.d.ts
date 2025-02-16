import { ReactNode } from 'react';
import { AccessibilitySettings, AccessibilityProfile, Language, FontFamilyOptions } from '../types';
import { translations } from '../i18n/translations';
export declare const defaultSettings: AccessibilitySettings;
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
export declare function AccessibilityProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useAccessibility(): AccessibilityContextType;
export {};
