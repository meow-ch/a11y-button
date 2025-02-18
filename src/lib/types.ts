export type Language = 'en' | 'fr' | 'de' | 'it';

export const BASE_FONT_SIZE = 16;

export const textTransformOptions = [
  { value: 'none', label: 'Normal Case' },
  { value: 'uppercase', label: 'UPPERCASE' },
  { value: 'lowercase', label: 'lowercase' },
  { value: 'capitalize', label: 'Capitalize Words' },
] as const;

export type TextTransform = typeof textTransformOptions[number]["value"];

export type NumericTupleIndices<T extends readonly unknown[]> =
  Exclude<keyof T, keyof any[]> extends infer K
    ? K extends `${infer N extends number}`
      ? N
      : never
    : never;

export type AccessibilityProfile = 'none' | 'clear-reading' | 'easy-reading';

export const MIN_FONT_SCALE = 0.75;
export const MAX_FONT_SCALE = 4.5;
export const FONT_SCALE_FACTOR_INCREMENTS = 0.75

export interface FontOption {
  value: string;
  label: string;
  description: string;
}


export const DEFAULT_FONT_OPTION_INDEX = 0;

export const fontFamilyOptions = [
  { value: '' as string, label: 'Default', description: 'From website' },
  { value: 'Arial', label: 'Arial', description: 'Standard sans-serif font' },
  { value: 'OpenDyslexic', label: 'OpenDyslexic', description: 'Designed for dyslexic readers' },
  { value: 'Atkinson Hyperlegible', label: 'Atkinson Hyperlegible', description: 'High legibility font' },
  { value: 'OpenSans', label: 'OpenSans', description: 'Good font font' },
  { value: 'Luciole', label: 'Luciole', description: 'Optimized for low vision' },
] as const;

export type FontFamilyOptions = typeof fontFamilyOptions;

export const fontSizeScaleOptions = [0.75, 1, 1.5, 2.25, 3.375, 4.5] as const;
export const wordSpacingScaleOptions = [1, 1.25, 1.5, 2] as const;
export const letterSpacingScaleOptions = [1, 1.15, 1.3, 1.5] as const;
export const lineHeightScaleOptions = [1, 1.3, 1.67, 2] as const;

export type TextScaleFactor = typeof fontSizeScaleOptions[number];
export type FontOptionIndex = NumericTupleIndices<typeof fontFamilyOptions>;
export type TextTransformOptionIndex = NumericTupleIndices<typeof textTransformOptions>;
export type FontSizeScaleOptionsIndex = NumericTupleIndices<typeof fontSizeScaleOptions>;
export type WordSpacingScaleOptionIndex = NumericTupleIndices<typeof wordSpacingScaleOptions>;
export type LetterSpacingScaleOptionIndex = NumericTupleIndices<typeof letterSpacingScaleOptions>;
export type LineHeightScaleOptionIndex = NumericTupleIndices<typeof lineHeightScaleOptions>;

export interface AccessibilitySettings {
  textTransformOptionIndex: TextTransformOptionIndex;
  fontSizeScaleOptionIndex: FontSizeScaleOptionsIndex;
  wordSpacingScaleOptionIndex: WordSpacingScaleOptionIndex;
  letterSpacingScaleOptionIndex: LetterSpacingScaleOptionIndex;
  lineHeightScaleOptionIndex: LineHeightScaleOptionIndex;
  fontOptionIndex: FontOptionIndex;
  currentProfile: AccessibilityProfile;
  showReadingMask: boolean;
  blackAndWhiteImages: boolean;
  cancelLayout: boolean;
  leftAlignText: boolean;
  numberListItems: boolean;
  customLinks: boolean;
  colorize: boolean;
  backgroundColor?: string;
  color?: string;
}

export type AccessibilitySettingsProps = keyof AccessibilitySettings;
export type NumericAccessibilitySettingsProps = Exclude<{
  [K in keyof AccessibilitySettings]: AccessibilitySettings[K] extends number ? K : never
}[keyof AccessibilitySettings], undefined>;

export const PROFILES: Record<AccessibilityProfile, Partial<AccessibilitySettings>> = {
  'none': {},
  'clear-reading': {
    color: '#0000FF',
    backgroundColor: '#FFFFFF',
    fontSizeScaleOptionIndex: 1, // 24px
    wordSpacingScaleOptionIndex: 1, // 4px
    letterSpacingScaleOptionIndex: 0,
    lineHeightScaleOptionIndex: 1, // 2rem
    leftAlignText: true,
    colorize: true,
  },
  'easy-reading': {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    fontSizeScaleOptionIndex: 1, // 24px
    wordSpacingScaleOptionIndex: 0, // 4px
    letterSpacingScaleOptionIndex: 0, // 1rem
    lineHeightScaleOptionIndex: 2, // 1.8rem
    showReadingMask: true,
  }
};
