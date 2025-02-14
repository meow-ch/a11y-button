import { useEffect } from 'react';
import { AccessibilitySettings, FONT_OPTIONS, FontOption, FontOptionLabel } from '../types';

function getNonDefaultFontValue(fontOptionLabel: Omit<FontOptionLabel, "Default">) {
  return FONT_OPTIONS.filter(o => o.label === fontOptionLabel)[0].value;
}

export function useAccessibilityStyles(
  settings: AccessibilitySettings, 
  defaultFont: FontOption,
  isEnabled: boolean // Add isEnabled parameter
) {
  useEffect(() => {
    // Always create toolbar styles for the toolbar UI itself
    const toolbarStyleElement = document.createElement('style');
    document.head.appendChild(toolbarStyleElement);

    // Create global style element only if enabled
    const globalStyleElement = isEnabled ? document.createElement('style') : null;
    if (globalStyleElement) {
      document.head.appendChild(globalStyleElement);
    }

    // Always set toolbar-specific CSS Custom Properties
    const toolbarStyles = `
      :root {
        /* Toolbar-specific variables */
        --a11y-toolbar-font-size: ${settings.fontSize}px;
        --a11y-toolbar-background: ${settings.backgroundColor};
        --a11y-toolbar-foreground: ${settings.foregroundColor};
        --a11y-toolbar-border-color: ${settings.foregroundColor};
        --a11y-toolbar-focus-ring: rgba(0, 0, 0, 0.4);
      }
    `;

    // Global styles that affect the consuming application - only if enabled
    const globalStyles = isEnabled ? `
      html {
        font-size: ${settings.fontSize}px !important;
        word-spacing: ${settings.wordSpacing}px !important;
        letter-spacing: ${settings.letterSpacing}px !important;
        line-height: ${settings.lineHeight} !important;
        ${settings.fontOptionLabel !== defaultFont.label 
          ? `font-family: ${getNonDefaultFontValue(settings.fontOptionLabel)} !important;` 
          : ''
        }
        background-color: ${settings.backgroundColor} !important;
        color: ${settings.foregroundColor} !important;
      }

      ${settings.removeBackgrounds || settings.blackAndWhite ? `
        *:not(.a11y-button-*) {
          background-color: ${settings.backgroundColor} !important;
          color: ${settings.foregroundColor} !important;
          border-color: ${settings.foregroundColor} !important;
        }

        button:not(.a11y-button-*),
        [role="button"]:not(.a11y-button-*),
        input[type="button"]:not(.a11y-button-*),
        input[type="submit"]:not(.a11y-button-*),
        input[type="reset"]:not(.a11y-button-*),
        .button:not(.a11y-button-*),
        select:not(.a11y-button-*) {
          border: 2px solid ${settings.foregroundColor} !important;
          color: ${settings.foregroundColor} !important;
          background-color: ${settings.backgroundColor} !important;
        }

        button:hover:not(.a11y-button-*),
        [role="button"]:hover:not(.a11y-button-*),
        input[type="button"]:hover:not(.a11y-button-*),
        input[type="submit"]:hover:not(.a11y-button-*),
        input[type="reset"]:hover:not(.a11y-button-*),
        .button:hover:not(.a11y-button-*) {
          background-color: ${settings.foregroundColor} !important;
          color: ${settings.backgroundColor} !important;
        }
      ` : ''}

      ${settings.blackAndWhite ? `
        img:not(.a11y-button-*), 
        video:not(.a11y-button-*), 
        canvas:not(.a11y-button-*), 
        svg:not(.a11y-button-*) {
          filter: grayscale(100%) !important;
        }
      ` : ''}

      ${settings.cancelLayout ? `
        *:not(.a11y-button-*) {
          float: none !important;
          position: static !important;
          transform: none !important;
        }
      ` : ''}

      ${settings.leftAlignText ? `
        *:not(.a11y-button-*) {
          text-align: left !important;
        }
      ` : ''}

      ${settings.numberListItems ? `
        ul:not(.a11y-button-*) {
          list-style-type: decimal !important;
        }
      ` : ''}

      ${settings.customLinks ? `
        a:not(.a11y-button-*) {
          text-decoration: underline !important;
          color: ${settings.blackAndWhite ? settings.foregroundColor : 'blue'} !important;
        }
        a:visited:not(.a11y-button-*) {
          color: ${settings.blackAndWhite ? settings.foregroundColor : 'purple'} !important;
        }
        a:hover:not(.a11y-button-*) {
          color: ${settings.blackAndWhite ? settings.foregroundColor : 'red'} !important;
        }
      ` : ''}

      ${settings.textCase !== 'none' ? `
        *:not(.a11y-button-*) {
          text-transform: ${settings.textCase} !important;
        }
      ` : ''}
    ` : '';

    // Apply the styles
    toolbarStyleElement.textContent = toolbarStyles;
    if (globalStyleElement) {
      globalStyleElement.textContent = globalStyles;
    }

    // Cleanup function
    return () => {
      document.head.removeChild(toolbarStyleElement);
      if (globalStyleElement) {
        document.head.removeChild(globalStyleElement);
      }
    };
  }, [
    isEnabled, // Add isEnabled to dependencies
    settings.fontSize,
    settings.wordSpacing,
    settings.letterSpacing,
    settings.lineHeight,
    settings.fontOptionLabel,
    settings.backgroundColor,
    settings.foregroundColor,
    settings.textCase,
    settings.removeBackgrounds,
    settings.cancelLayout,
    settings.leftAlignText,
    settings.numberListItems,
    settings.customLinks,
    settings.blackAndWhite,
    defaultFont.value
  ]);
}
