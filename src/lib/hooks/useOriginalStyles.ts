import { useState, useEffect, useMemo } from 'react';
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

export const getNumericValue = (value: string | undefined): number | undefined => {
  if (!value) return undefined;
  const match = value.match(/^(-?\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : undefined;
};

export function useOriginalStyles() {
  const [originalStyles, setOriginalStyles] = useState<OriginalStyles | null>(null);

  useEffect(() => {
    if (!originalStyles) {
      const htmlStyles = window.getComputedStyle(document.documentElement);
      const bodyStyles = window.getComputedStyle(document.body);

      // Helper to get computed value from body or html.
      const getComputedValue = (property: string): string | undefined => {
        const bodyValue = bodyStyles.getPropertyValue(property);
        const htmlValue = htmlStyles.getPropertyValue(property);
        const value = bodyValue || htmlValue;
        return value || undefined;
      };

      const capturedStyles: OriginalStyles = {
        fontSize: getComputedValue('font-size'),
        backgroundColor: getComputedValue('background-color'),
        color: getComputedValue('color'),
        letterSpacing: getComputedValue('letter-spacing'),
        wordSpacing: getComputedValue('word-spacing'),
        lineHeight: getComputedValue('line-height'),
        fontFamily: getComputedValue('font-family'),
        textTransform: getComputedValue('text-transform') as TextTransform,
      };

      // Remove any properties that are undefined.
      Object.keys(capturedStyles).forEach((key) => {
        if (capturedStyles[key as keyof OriginalStyles] === undefined) {
          delete capturedStyles[key as keyof OriginalStyles];
        }
      });

      setOriginalStyles(capturedStyles);

      if (process.env.NODE_ENV === 'development') {
        console.log('Original styles captured:', capturedStyles);
      }
    }
  }, [originalStyles]);

  return useMemo(() => ({ originalStyles }), [originalStyles]);
}
