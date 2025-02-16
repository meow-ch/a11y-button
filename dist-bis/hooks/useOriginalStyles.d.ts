import { TextTransform } from '../types';
export type OriginalStyles = Partial<{
    fontSize: string;
    backgroundColor: string;
    color: string;
    letterSpacing: string;
    wordSpacing: string;
    lineHeight: string;
    fontFamily: string;
    textTransform: TextTransform;
}>;
export declare const getNumericValue: (value: string | undefined) => number | undefined;
export declare function useOriginalStyles(): {
    originalStyles: Partial<{
        fontSize: string;
        backgroundColor: string;
        color: string;
        letterSpacing: string;
        wordSpacing: string;
        lineHeight: string;
        fontFamily: string;
        textTransform: TextTransform;
    }> | null;
};
