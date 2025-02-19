import { useEffect } from 'react';
import { AccessibilitySettings, BASE_FONT_SIZE } from '../types';
import { useOriginalStyles } from './useOriginalStyles';
import { getOption } from '../utils/option';
import { BASE_FONT_UNIT, getScaledSpacing, getScaledUnitlessValue, splitCssSize } from '../utils/size';

export function useAccessibilityStyles(
  settings: AccessibilitySettings,
  isEnabled: boolean
) {
  const { originalStyles } = useOriginalStyles();

  useEffect(() => {
    if (originalStyles === null) return;

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
    const lsDefault = 0.5;
    const letterSpacingCSS = getScaledSpacing(
      originalStyles.letterSpacing,
      letterSpacingFactor,
      lsDefault,
      originalFontSize
    );

    const wordSpacingFactor = getOption({
      wordSpacingScaleOptionIndex: settings.wordSpacingScaleOptionIndex,
    });
    const wsDefault = 0.5;
    const wordSpacingCSS = getScaledSpacing(
      originalStyles.wordSpacing,
      wordSpacingFactor,
      wsDefault,
      originalFontSize
    );

    const lineHeightFactor = getOption({
      lineHeightScaleOptionIndex: settings.lineHeightScaleOptionIndex,
    });
    const lineHeightCSS = getScaledUnitlessValue(
      originalStyles.lineHeight,
      lineHeightFactor,
      1
    );

    const textTransform = getOption({
      textTransformOptionIndex: settings.textTransformOptionIndex,
    });

    const fontFamily =
      settings.fontOptionIndex !== 0
        ? getOption({ fontOptionIndex: settings.fontOptionIndex }).value
        : originalStyles.fontFamily || "inherit";

    const usedColors = {
      backgroundColor: (settings.colorize && settings.backgroundColor) || null,
      color: (settings.colorize && settings.color) || null,
    }

    const toolbarStyles = `
      :root {
        --a11y-button-font-size: ${scaledFontSize}${unit};
        --a11y-button-background: ${usedColors.backgroundColor || "initial"};
        --a11y-button-foreground: ${usedColors.color || "initial"};
        --a11y-button-border-color: ${usedColors.color || "initial"};
        --a11y-button-focus-ring: rgba(0, 0, 0, 0.4);
      }
    `;

    const colors = `
        ${usedColors.backgroundColor ? `background-color: var(--a11y-button-background) !important;` : ""}
        ${usedColors.color ? `color: var(--a11y-button-foreground) !important;` : ""}
    `
    const colorsHover = `
        ${usedColors.backgroundColor ? `color: var(--a11y-button-background) !important;` : ""}
        ${usedColors.color ? `background-color: var(--a11y-button-foreground) !important;` : ""}
    `

    const globalStyles = isEnabled
      ? `
      html {
        font-size: var(--a11y-button-font-size) !important;
      }

      /* Apply to all elements except toolbar components */
      *:not([class*="reading-mask-overlay"]) {
        ${letterSpacingCSS ? `letter-spacing: ${letterSpacingCSS} !important;` : ""}
        ${wordSpacingCSS ? `word-spacing: ${wordSpacingCSS} !important;` : ""}
        ${lineHeightCSS ? `line-height: ${lineHeightCSS} !important;` : ""}
        ${settings.fontOptionIndex !== 0 ? `font-family: ${fontFamily} !important;` : ""}
        ${textTransform.value !== "none" ? `text-transform: ${textTransform.value} !important;` : ""}
        ${usedColors.color ? `border-color: var(--a11y-button-foreground) !important;` : ""}
      }
      *:not([class*="reading-mask-overlay"]) {
        ${colors}
      }

      button:hover:not([class*="reading-mask-overlay"]),
      button svg:hover,
      button:hover svg,
      button:hover span:not([class*="a11y-button-toggle-knob"]),
      button span:hover:not([class*="a11y-button-toggle-knob"]) {
        ${colorsHover}
      }
      button svg:hover path,
      button svg:hover circle,
      button:hover svg path,
      button:hover svg circle {
        ${usedColors.backgroundColor ? `color: var(--a11y-button-background) !important;` : ""}
      }

      /* Ensure backgrounds are applied to all elements except toolbar */
      div:not([class*="reading-mask-overlay"]),
      nav,
      header,
      main,
      section,
      article,
      aside,
      svg {
        ${colors}
      }

      /* Black and white mode */
      ${settings.blackAndWhiteImages ? `
      img,
      video,
      canvas,
      svg {
        filter: grayscale(100%) !important;
      }
      ` : ""}

      /* Layout modifications */
      ${settings.cancelLayout ? `
      *:not([class*="reading-mask-overlay"]) {
        float: none !important;
        position: static !important;
        transform: none !important;
      }
      ` : ""}

      /* Text alignment */
      ${settings.leftAlignText ? `
      * {
        text-align: left !important;
      }
      ` : ""}

      /* List styling */
      ${settings.numberListItems ? `
      ul {
        list-style-type: decimal !important;
      }
      ` : ""}

      /* Custom link styling */
      ${settings.customLinks ? `
      a {
        text-decoration: underline !important;
        color: ${settings.colorize ? usedColors.color : "blue"} !important;
      }
      a:visited {
        color: ${settings.colorize ? usedColors.color : "purple"} !important;
      }
      a:hover {
        color: ${settings.colorize ? usedColors.color : "red"} !important;
      }
      ` : ""}
    `
      : "";

    toolbarStyleElement.textContent = toolbarStyles;
    if (isEnabled) {
      globalStyleElement.textContent = globalStyles;
    }

    return () => {
      document.head.removeChild(toolbarStyleElement);
      if (document.head.contains(globalStyleElement)) {
        document.head.removeChild(globalStyleElement);
      }
    };
  }, [isEnabled, settings, originalStyles]);
}
