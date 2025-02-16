import { FontSizeScaleOptionsIndex } from "../types";
export declare const conversionMapToPx: {
    readonly px: (v: number) => number;
    readonly pt: (v: number) => number;
    readonly in: (v: number) => number;
    readonly cm: (v: number) => number;
    readonly mm: (v: number) => number;
    readonly pc: (v: number) => number;
    readonly em: (v: number, base: number) => number;
    readonly rem: (v: number, base: number) => number;
    readonly '%': (v: number, base: number) => number;
};
export declare const conversionMapToEm: {
    readonly px: (v: number, base: number) => number;
    readonly pt: (v: number, base: number) => number;
    readonly in: (v: number, base: number) => number;
    readonly cm: (v: number, base: number) => number;
    readonly mm: (v: number, base: number) => number;
    readonly pc: (v: number, base: number) => number;
    readonly em: (v: number) => number;
    readonly rem: (v: number) => number;
    readonly '%': (v: number) => number;
};
export declare const conversionMapPxTo: {
    readonly px: (v: number) => number;
    readonly pt: (v: number) => number;
    readonly in: (v: number) => number;
    readonly cm: (v: number) => number;
    readonly mm: (v: number) => number;
    readonly pc: (v: number) => number;
    readonly em: (v: number, base: number) => number;
    readonly rem: (v: number, base: number) => number;
    readonly '%': (v: number, base: number) => number;
};
export type CssSizeUnit = keyof typeof conversionMapToPx;
/**
 * Converts a CSS size string (e.g., "16px", "1.2em", "12pt", "150%") into a pixel estimate.
 *
 * Supports absolute units:
 *  - px: pixels
 *  - pt: points (1pt ≈ 1.3333px)
 *  - in: inches (1in = 96px)
 *  - cm: centimeters (1cm = 96/2.54px)
 *  - mm: millimeters (1mm = 96/25.4px)
 *  - pc: picas (1pc = 16px)
 *
 * And relative units (using a base font size, default 16px):
 *  - em
 *  - rem
 *  - %   (where 100% equals the base font size)
 *
 * @param cssSize - The CSS size string to convert.
 * @param baseFontSize - The base font size in pixels used for relative units (default is 16).
 * @returns The size in pixels.
 *
 * @throws Error if the provided string is in an unsupported format or uses an unsupported unit.
 */
export declare function convertCssSizeToPx(cssSize: string, baseFontSize?: number): number;
export declare function convertCssSizeToRem(cssSize: string, baseFontSize?: number): number;
export declare function getScaledFontSize({ fontSizeScaleOptionIndex }: {
    fontSizeScaleOptionIndex: FontSizeScaleOptionsIndex;
}, baseFontSize?: number): number;
export interface CssSize {
    value: number;
    unit: CssSizeUnit;
}
/**
 * Splits a CSS size string (e.g., "16px", "1.2em", "12pt", "150%") into its numeric value and unit.
 *
 * @param cssSize - The CSS size string to split.
 * @returns An object with the numeric value and the unit.
 *
 * @throws Error if the provided string does not match the expected format or contains an unsupported unit.
 */
export declare function splitCssSize(cssSize: string): CssSize;
export declare const getScaledSpacing: (originalSpacing: string | undefined, spacingFactor: number, defaultBaselineEm: number, baseFontSizePx: number) => string;
export declare const getScaledUnitlessValue: (originalValue: string | undefined, factor: number, defaultBaseline: number) => string;
