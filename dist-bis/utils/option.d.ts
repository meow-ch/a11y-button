import { FontSizeScaleOptionsIndex, fontSizeScaleOptions, WordSpacingScaleOptionIndex, wordSpacingScaleOptions, LetterSpacingScaleOptionIndex, letterSpacingScaleOptions, LineHeightScaleOptionIndex, lineHeightScaleOptions, TextTransformOptionIndex, textTransformOptions, FontOptionIndex, fontFamilyOptions } from "../types";
export declare function getOption(obj: {
    fontSizeScaleOptionIndex: FontSizeScaleOptionsIndex;
}): typeof fontSizeScaleOptions[number];
export declare function getOption(obj: {
    wordSpacingScaleOptionIndex: WordSpacingScaleOptionIndex;
}): typeof wordSpacingScaleOptions[number];
export declare function getOption(obj: {
    letterSpacingScaleOptionIndex: LetterSpacingScaleOptionIndex;
}): typeof letterSpacingScaleOptions[number];
export declare function getOption(obj: {
    lineHeightScaleOptionIndex: LineHeightScaleOptionIndex;
}): typeof lineHeightScaleOptions[number];
export declare function getOption(obj: {
    textTransformOptionIndex: TextTransformOptionIndex;
}): typeof textTransformOptions[number];
export declare function getOption(obj: {
    fontOptionIndex: FontOptionIndex;
}): typeof fontFamilyOptions[number];
