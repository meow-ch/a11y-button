export type Language = 'en' | 'fr' | 'de' | 'it';

export type TextCase = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

export type AccessibilityProfile = 'none' | 'clear-reading' | 'easy-reading';

export interface FontOption {
  value: string;
  label: string;
  description: string;
}

export const DEFAULT_FONT_LABEL = 'Default';

export const FONT_OPTIONS = [
  { value: '' as string, label: DEFAULT_FONT_LABEL, description: 'From website' },
  { value: 'Arial', label: 'Arial', description: 'Standard sans-serif font' },
  { value: 'OpenDyslexic', label: 'OpenDyslexic', description: 'Designed for dyslexic readers' },
  { value: 'Atkinson Hyperlegible', label: 'Atkinson Hyperlegible', description: 'High legibility font' },
  { value: 'OpenSans', label: 'OpenSans', description: 'Good font font' },
  { value: 'Luciole', label: 'Luciole', description: 'Optimized for low vision' },
] as const;

export type FontOptionLabel = typeof FONT_OPTIONS[number]["label"];

export interface AccessibilitySettings {
  fontSize: number;
  wordSpacing: number;
  letterSpacing: number;
  lineHeight: number;
  fontOptionLabel: FontOptionLabel;
  textCase: TextCase;
  cancelLayout: boolean;
  leftAlignText: boolean;
  numberListItems: boolean;
  customLinks: boolean;
  showReadingMask: boolean;
  backgroundColor: string;
  foregroundColor: string;
  removeBackgrounds: boolean;
  currentProfile: AccessibilityProfile;
  blackAndWhite: boolean;
  language: Language;
}

export const PROFILES: Record<AccessibilityProfile, Partial<AccessibilitySettings>> = {
  'none': {},
  'clear-reading': {
    fontSize: 24,
    removeBackgrounds: true,
    foregroundColor: '#0000FF',
    backgroundColor: '#FFFFFF',
    wordSpacing: 4,
    lineHeight: 2
  },
  'easy-reading': {
    fontSize: 20,
    showReadingMask: true,
    lineHeight: 1.8,
    wordSpacing: 3,
    letterSpacing: 1
  }
};
