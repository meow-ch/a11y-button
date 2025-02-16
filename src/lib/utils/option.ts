import { 
  FontSizeScaleOptionsIndex, fontSizeScaleOptions, 
  WordSpacingScaleOptionIndex, wordSpacingScaleOptions, 
  LetterSpacingScaleOptionIndex, letterSpacingScaleOptions, 
  LineHeightScaleOptionIndex, lineHeightScaleOptions, 
  TextTransformOptionIndex, textTransformOptions,
  FontOptionIndex, fontFamilyOptions
} from "../types";

// Overload signatures for each option type:
export function getOption(
  obj: { fontSizeScaleOptionIndex: FontSizeScaleOptionsIndex }
): typeof fontSizeScaleOptions[number];
export function getOption(
  obj: { wordSpacingScaleOptionIndex: WordSpacingScaleOptionIndex }
): typeof wordSpacingScaleOptions[number];
export function getOption(
  obj: { letterSpacingScaleOptionIndex: LetterSpacingScaleOptionIndex }
): typeof letterSpacingScaleOptions[number];
export function getOption(
  obj: { lineHeightScaleOptionIndex: LineHeightScaleOptionIndex }
): typeof lineHeightScaleOptions[number];
export function getOption(
  obj: { textTransformOptionIndex: TextTransformOptionIndex }
): typeof textTransformOptions[number];
export function getOption(
  obj: { fontOptionIndex: FontOptionIndex }
): typeof fontFamilyOptions[number];

// Implementation signature covering all cases:
export function getOption(obj: {
  fontSizeScaleOptionIndex?: FontSizeScaleOptionsIndex;
  wordSpacingScaleOptionIndex?: WordSpacingScaleOptionIndex;
  letterSpacingScaleOptionIndex?: LetterSpacingScaleOptionIndex;
  lineHeightScaleOptionIndex?: LineHeightScaleOptionIndex;
  textTransformOptionIndex?: TextTransformOptionIndex;
  fontOptionIndex?: FontOptionIndex;
}): unknown {
  if ('fontSizeScaleOptionIndex' in obj && typeof obj.fontSizeScaleOptionIndex === 'number') {
    return fontSizeScaleOptions[obj.fontSizeScaleOptionIndex];
  }
  if ('wordSpacingScaleOptionIndex' in obj && typeof obj.wordSpacingScaleOptionIndex === 'number') {
    return wordSpacingScaleOptions[obj.wordSpacingScaleOptionIndex];
  }
  if ('letterSpacingScaleOptionIndex' in obj && typeof obj.letterSpacingScaleOptionIndex === 'number') {
    return letterSpacingScaleOptions[obj.letterSpacingScaleOptionIndex];
  }
  if ('lineHeightScaleOptionIndex' in obj && typeof obj.lineHeightScaleOptionIndex === 'number') {
    return lineHeightScaleOptions[obj.lineHeightScaleOptionIndex];
  }
  if ('textTransformOptionIndex' in obj && typeof obj.textTransformOptionIndex === 'number') {
    return textTransformOptions[obj.textTransformOptionIndex];
  }
  if ('fontOptionIndex' in obj && typeof obj.fontOptionIndex === 'number') {
    return fontFamilyOptions[obj.fontOptionIndex];
  }
  throw new Error('No valid option index property provided.');
}
