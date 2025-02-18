import { OriginalStyles } from "../hooks/useOriginalStyles";
import { BASE_FONT_SIZE, fontSizeScaleOptions, FontSizeScaleOptionsIndex } from "../types";

  // Conversion map: each unit maps to a function that returns its pixel equivalent.
export const conversionMapToPx = {
  // Absolute units
  px: (v: number, _?: number) => v,
  pt: (v: number, _?: number) => v * (4 / 3),          // 1pt ≈ 1.3333px
  in: (v: number, _?: number) => v * 96,               // 1in = 96px
  cm: (v: number, _?: number) => v * (96 / 2.54),        // 1cm = 96/2.54px
  mm: (v: number, _?: number) => v * (96 / 25.4),        // 1mm = 96/25.4px
  pc: (v: number, _?: number) => v * 16,               // 1pc = 16px (since 1pc = 12pt and 12pt×4/3 = 16px)
  // Relative units (using baseFontSize)
  em: (v: number, base: number) => v * base,
  rem: (v: number, base: number) => v * base,
  '%': (v: number, base: number) => (v / 100) * base,
} as const;

export const conversionMapToEm = {
  // Absolute units: convert to px then divide by the base
  px: (v: number, base: number): number => v / base,
  pt: (v: number, base: number): number => (v * (4 / 3)) / base,
  in: (v: number, base: number): number => (v * 96) / base,
  cm: (v: number, base: number): number => (v * (96 / 2.54)) / base,
  mm: (v: number, base: number): number => (v * (96 / 25.4)) / base,
  pc: (v: number, base: number): number => (v * 16) / base,

  // Relative units: already relative to the base
  em: (v: number): number => v,
  rem: (v: number): number => v,
  '%': (v: number): number => v / 100,
} as const;

export const conversionMapPxTo = {
  // Absolute units
  px: (v: number) => v,
  pt: (v: number) => v * (3 / 4),            // Because 1pt ≈ 1.3333px, so px -> pt: px * (3/4)
  in: (v: number) => v / 96,                 // 1in = 96px, so px -> in: px / 96
  cm: (v: number) => v * (2.54 / 96),        // 1cm = 96/2.54px, so px -> cm: px * (2.54/96)
  mm: (v: number) => v * (25.4 / 96),        // 1mm = 96/25.4px, so px -> mm: px * (25.4/96)
  pc: (v: number) => v / 16,                 // 1pc = 16px, so px -> pc: px / 16

  // Relative units (using baseFontSize)
  em: (v: number, base: number) => v / base,
  rem: (v: number, base: number) => v / base,
  '%': (v: number, base: number) => (v / base) * 100,
} as const;

export type CssSizeUnit = keyof typeof conversionMapToPx;

export const BASE_FONT_UNIT: CssSizeUnit = 'px';

export function getOriginalFontSizeInPxOrDefault(originalStyles: OriginalStyles) {
    const { value: originalFontSize, unit } = originalStyles.fontSize
      ? splitCssSize(originalStyles.fontSize)
      : { value: BASE_FONT_SIZE, unit: BASE_FONT_UNIT };

      console.log(" origina fontSize", originalStyles.fontSize);
      console.log(" origina orifontsize", originalFontSize, unit);

    return conversionMapToPx[unit](originalFontSize, BASE_FONT_SIZE);
}

// List of supported units.
const supportedUnits = Object.keys(conversionMapPxTo) as CssSizeUnit[];

function isSupportedUnit(unit: string): unit is CssSizeUnit {
  return supportedUnits.includes(unit as CssSizeUnit);
}

/**
 * Converts a CSS size string (e.g., "16px", "1.2rem", "12pt", "150%") into a pixel estimate.
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
export function convertCssSizeToPx(cssSize: string, baseFontSize: number = 16): number {
  const trimmed = cssSize.trim();

  // Matches a signed or unsigned number (integer or float) followed by letters or '%'.
  const regex = /^([-+]?[0-9]*\.?[0-9]+)([a-z%]+)$/i;
  const match = trimmed.match(regex);

  if (!match) {
    throw new Error(`Unsupported CSS size format: "${cssSize}"`);
  }

  const value = parseFloat(match[1]);
  // Normalize the unit to lower-case.
  const unit = match[2].toLowerCase() as CssSizeUnit;

  if (!(unit in conversionMapToPx)) {
    throw new Error(`Unsupported CSS unit: "${unit}"`);
  }

  return conversionMapToPx[unit](value, baseFontSize);
}

export function convertCssSizeToRem(cssSize: string, baseFontSize: number = 16): number {
  return convertCssSizeToPx(cssSize, baseFontSize) / baseFontSize;
}

export function getScaledFontSize({ fontSizeScaleOptionIndex }: { fontSizeScaleOptionIndex: FontSizeScaleOptionsIndex; }, baseFontSize = BASE_FONT_SIZE): number {
  const textScaleFactor = fontSizeScaleOptions[fontSizeScaleOptionIndex];
  return baseFontSize * textScaleFactor;
}

export interface CssSize {
  value: number;
  unit: CssSizeUnit;
}

/**
 * Splits a CSS size string (e.g., "16px", "1.2rem", "12pt", "150%") into its numeric value and unit.
 *
 * @param cssSize - The CSS size string to split.
 * @returns An object with the numeric value and the unit.
 *
 * @throws Error if the provided string does not match the expected format or contains an unsupported unit.
 */
export function splitCssSize(cssSize: string): CssSize {
  const trimmed = cssSize.trim();
  // Regex to capture the numeric part and the unit part.
  const regex = /^([-+]?[0-9]*\.?[0-9]+)([a-z%]+)$/i;
  const match = trimmed.match(regex);

  if (!match) {
    throw new Error(`Unsupported CSS size format: "${cssSize}"`);
  }

  const value = parseFloat(match[1]);
  const unit = match[2].toLowerCase();


  if (!isSupportedUnit(unit)) {
    throw new Error(`Unsupported CSS unit: "${unit}"`);
  }

  return { value, unit: unit as CssSizeUnit };
}

// DRY helper for scaling spacing values (letter-spacing or word-spacing)
export const getScaledSpacing = (
  originalSpacing: string | undefined,
  spacingFactor: number,
  defaultBaselineEm: number, // in em
  baseFontSizePx: number   // in pixels
): string => {
  if (spacingFactor <= 1) {
    return "";
  }
  if (!originalSpacing || originalSpacing === "normal") {
    return `${defaultBaselineEm * spacingFactor}em`;
  }
  const { value, unit } = splitCssSize(originalSpacing);
  const numericValue =
    unit === "em"
      ? value
      : conversionMapToEm[unit](value, baseFontSizePx);
  return `${Math.max(numericValue, defaultBaselineEm) * spacingFactor}em`;
};

export const getScaledUnitlessValue = (
  originalValue: string | undefined,
  factor: number,
  defaultBaseline: number
): string => {
  if (factor <= 1) {
    return "";
  }
  if (!originalValue || originalValue === "normal") {
    return `${defaultBaseline * factor}`;
  }
  const { value } = splitCssSize(originalValue);
  return `${value * factor}`;
};


