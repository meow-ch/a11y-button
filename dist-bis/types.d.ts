export type Language = 'en' | 'fr' | 'de' | 'it';
export declare const BASE_FONT_SIZE = 16;
export declare const BASE_FONT_UNIT = "px";
export declare const textTransformOptions: readonly [{
    readonly value: "none";
    readonly label: "Normal Case";
}, {
    readonly value: "uppercase";
    readonly label: "UPPERCASE";
}, {
    readonly value: "lowercase";
    readonly label: "lowercase";
}, {
    readonly value: "capitalize";
    readonly label: "Capitalize Words";
}];
export type TextTransform = typeof textTransformOptions[number]["value"];
export type NumericTupleIndices<T extends readonly unknown[]> = Exclude<keyof T, keyof any[]> extends infer K ? K extends `${infer N extends number}` ? N : never : never;
export type AccessibilityProfile = 'none' | 'clear-reading' | 'easy-reading';
export declare const MIN_FONT_SCALE = 0.75;
export declare const MAX_FONT_SCALE = 4.5;
export declare const FONT_SCALE_FACTOR_INCREMENTS = 0.75;
export interface FontOption {
    value: string;
    label: string;
    description: string;
}
export declare const DEFAULT_FONT_OPTION_INDEX = 0;
export declare const fontFamilyOptions: readonly [{
    readonly value: string;
    readonly label: "Default";
    readonly description: "From website";
}, {
    readonly value: "Arial";
    readonly label: "Arial";
    readonly description: "Standard sans-serif font";
}, {
    readonly value: "OpenDyslexic";
    readonly label: "OpenDyslexic";
    readonly description: "Designed for dyslexic readers";
}, {
    readonly value: "Atkinson Hyperlegible";
    readonly label: "Atkinson Hyperlegible";
    readonly description: "High legibility font";
}, {
    readonly value: "OpenSans";
    readonly label: "OpenSans";
    readonly description: "Good font font";
}, {
    readonly value: "Luciole";
    readonly label: "Luciole";
    readonly description: "Optimized for low vision";
}];
export type FontFamilyOptions = typeof fontFamilyOptions;
export declare const fontSizeScaleOptions: readonly [0.75, 1, 1.5, 2.25, 3.375, 4.5];
export declare const wordSpacingScaleOptions: readonly [1, 1.25, 1.5, 2];
export declare const letterSpacingScaleOptions: readonly [1, 1.15, 1.3, 1.5];
export declare const lineHeightScaleOptions: readonly [1, 1.3, 1.67, 2];
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
    blackAndWhite: boolean;
    cancelLayout: boolean;
    leftAlignText: boolean;
    numberListItems: boolean;
    customLinks: boolean;
    removeBackgrounds: boolean;
    backgroundColor?: string;
    color?: string;
}
export type AccessibilitySettingsProps = keyof AccessibilitySettings;
export type NumericAccessibilitySettingsProps = Exclude<{
    [K in keyof AccessibilitySettings]: AccessibilitySettings[K] extends number ? K : never;
}[keyof AccessibilitySettings], undefined>;
export declare const PROFILES: Record<AccessibilityProfile, Partial<AccessibilitySettings>>;
