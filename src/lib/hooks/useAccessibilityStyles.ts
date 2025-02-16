import { useEffect } from 'react';
import {
  AccessibilitySettings,
  BASE_FONT_SIZE,
  BASE_FONT_UNIT,
} from '../types';
import { useOriginalStyles } from './useOriginalStyles';
import { getOption } from '../utils/option';
import { getScaledSpacing, getScaledUnitlessValue, splitCssSize } from '../utils/size';

export function useAccessibilityStyles(
  settings: AccessibilitySettings,
  isEnabled: boolean
) {
  const { originalStyles } = useOriginalStyles();

  useEffect(() => {
    if (originalStyles === null) return;

    // Create style elements for the toolbar and global overrides.
    const toolbarStyleElement = document.createElement('style');
    const globalStyleElement = document.createElement('style');

    toolbarStyleElement.setAttribute('data-a11y', 'toolbar');
    globalStyleElement.setAttribute('data-a11y', 'global');

    document.head.appendChild(toolbarStyleElement);
    if (isEnabled) {
      document.head.appendChild(globalStyleElement);
    }

    // ----- Font Size -----
    const { value: originalFontSize, unit } = originalStyles.fontSize
      ? splitCssSize(originalStyles.fontSize)
      : { value: BASE_FONT_SIZE, unit: BASE_FONT_UNIT };

    const fontSizeScaleFactor = getOption({
      fontSizeScaleOptionIndex: settings.fontSizeScaleOptionIndex,
    });
    const scaledFontSize = originalFontSize * fontSizeScaleFactor;

    const letterSpacingFactor = getOption({
      letterSpacingScaleOptionIndex: settings.letterSpacingScaleOptionIndex,
    });
    const lsDefault = 0.5; // default baseline in em
    const letterSpacingCSS = getScaledSpacing(
      originalStyles.letterSpacing,
      letterSpacingFactor,
      lsDefault,
      originalFontSize
    );

    console.log("LETTER SPACING",
      'settingsindex',settings.letterSpacingScaleOptionIndex,
      'originalStyles.letterSpacing',
      originalStyles.letterSpacing,
      'letterSpacingFactor',
      letterSpacingFactor,
      'lsDefault',
      lsDefault,
      'originalFontSize',
      originalFontSize,
      'final',
      letterSpacingCSS
    );

    const wordSpacingFactor = getOption({
      wordSpacingScaleOptionIndex: settings.wordSpacingScaleOptionIndex,
    });
    const wsDefault = 0.5; // default baseline in em
    const wordSpacingCSS = getScaledSpacing(
      originalStyles.wordSpacing,
      wordSpacingFactor,
      wsDefault,
      originalFontSize
    );

    // ----- Line Height -----
    const lineHeightFactor = getOption({
      lineHeightScaleOptionIndex: settings.lineHeightScaleOptionIndex,
    });
    const lineHeightCSS = getScaledUnitlessValue(
      originalStyles.lineHeight,
      lineHeightFactor,
      1  // default baseline for line-height
    );

    // ----- Text Transform -----
    const textTransform = getOption({
      textTransformOptionIndex: settings.textTransformOptionIndex,
    });

    // ----- Font Family -----
    const fontFamily =
      settings.fontOptionIndex !== 0
        ? getOption({ fontOptionIndex: settings.fontOptionIndex }).value
        : originalStyles.fontFamily || "inherit";

    // ----- Toolbar Styles -----
    const toolbarStyles = `
      :root {
        --a11y-toolbar-font-size: calc(var(--a11y-button-base-font-size) * ${fontSizeScaleFactor});
        --a11y-toolbar-background: ${settings.backgroundColor || "initial"};
        --a11y-toolbar-foreground: ${settings.color || "initial"};
        --a11y-toolbar-border-color: ${settings.color || "initial"};
        --a11y-toolbar-focus-ring: rgba(0, 0, 0, 0.4);
      }
    `;

    // ----- Global Styles -----
    const globalStyles = isEnabled
      ? `
      /* Apply to all elements except toolbar components */
      *:not([class*="a11y-button-"]) {
        ${letterSpacingCSS ? `letter-spacing: ${letterSpacingCSS} !important;` : ""}
        ${wordSpacingCSS ? `word-spacing: ${wordSpacingCSS} !important;` : ""}
        ${lineHeightCSS ? `line-height: ${lineHeightCSS} !important;` : ""}
        ${settings.fontOptionIndex !== 0 ? `font-family: ${fontFamily} !important;` : ""}
        ${textTransform.value !== "none" ? `text-transform: ${textTransform.value} !important;` : ""}
      }

      /* Background and text colors */
      html, body {
        font-size: ${scaledFontSize}${unit} !important;
        ${settings.backgroundColor ? `background-color: ${settings.backgroundColor} !important;` : ""}
        ${settings.color ? `color: ${settings.color} !important;` : ""}
      }

      /* Black and white mode */
      ${settings.blackAndWhite ? `
      img:not([class*="a11y-button-"]),
      video:not([class*="a11y-button-"]),
      canvas:not([class*="a11y-button-"]),
      svg:not([class*="a11y-button-"]) {
        filter: grayscale(100%) !important;
      }
      ` : ""}

      /* Layout modifications */
      ${settings.cancelLayout ? `
      *:not([class*="a11y-button-"]) {
        float: none !important;
        position: static !important;
        transform: none !important;
      }
      ` : ""}

      /* Text alignment */
      ${settings.leftAlignText ? `
      *:not([class*="a11y-button-"]) {
        text-align: left !important;
      }
      ` : ""}

      /* List styling */
      ${settings.numberListItems ? `
      ul:not([class*="a11y-button-"]) {
        list-style-type: decimal !important;
      }
      ` : ""}

      /* Custom link styling */
      ${settings.customLinks ? `
      a:not([class*="a11y-button-"]) {
        text-decoration: underline !important;
        color: ${settings.blackAndWhite ? settings.color : "blue"} !important;
      }
      a:visited:not([class*="a11y-button-"]) {
        color: ${settings.blackAndWhite ? settings.color : "purple"} !important;
      }
      a:hover:not([class*="a11y-button-"]) {
        color: ${settings.blackAndWhite ? settings.color : "red"} !important;
      }
      ` : ""}
    `
      : "";

    toolbarStyleElement.textContent = toolbarStyles;
    if (isEnabled) {
      globalStyleElement.textContent = globalStyles;
    }

    // Cleanup: remove these style elements when dependencies change or when the component unmounts.
    return () => {
      document.head.removeChild(toolbarStyleElement);
      if (document.head.contains(globalStyleElement)) {
        document.head.removeChild(globalStyleElement);
      }
    };
  }, [isEnabled, settings, originalStyles]);
}
