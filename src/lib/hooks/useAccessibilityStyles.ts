import { useEffect } from 'react';
import { AccessibilitySettings, FONT_OPTIONS } from '../types';

export function useAccessibilityStyles(settings: AccessibilitySettings) {
  useEffect(() => {
    // Create a style element for global styles
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    // Apply styles to the root element
    document.documentElement.style.fontSize = `${settings.fontSize}px`;
    document.documentElement.style.wordSpacing = `${settings.wordSpacing}px`;
    document.documentElement.style.letterSpacing = `${settings.letterSpacing}px`;
    document.documentElement.style.lineHeight = settings.lineHeight.toString();
    if (settings.fontFamily !== FONT_OPTIONS[0].value) {
      document.documentElement.style.fontFamily = settings.fontFamily;
    }
    document.documentElement.style.backgroundColor = settings.backgroundColor;
    document.documentElement.style.color = settings.foregroundColor;

    // Apply text case transformation
    if (settings.textCase !== 'none') {
      document.documentElement.style.textTransform = settings.textCase;
    } else {
      document.documentElement.style.textTransform = 'none';
    }

    // Create global styles for various accessibility features
    const globalStyles = `
      ${settings.removeBackgrounds ? `
        * {
          background-color: ${settings.backgroundColor} !important;
          color: ${settings.foregroundColor} !important;
          border-color: ${settings.foregroundColor} !important;
        }
      ` : ''}

      ${settings.blackAndWhite ? `
        * {
          background-color: ${settings.backgroundColor} !important;
          color: ${settings.foregroundColor} !important;
          border-color: ${settings.foregroundColor} !important;
        }
        img, video, canvas, svg {
          filter: grayscale(100%) !important;
        }
      ` : `
        img, video, canvas, svg {
          filter: none !important;
        }
      `}

      ${settings.cancelLayout ? `
        * {
          float: none !important;
          position: static !important;
          transform: none !important;
          margin: inherit !important;
          padding: inherit !important;
        }
      ` : ''}

      ${settings.leftAlignText ? `
        * {
          text-align: left !important;
        }
      ` : ''}

      ${settings.numberListItems ? `
        ul {
          list-style-type: decimal !important;
        }
      ` : ''}

      ${settings.customLinks ? `
        a {
          text-decoration: underline !important;
          color: ${settings.blackAndWhite ? settings.foregroundColor : 'blue'} !important;
        }
        a:visited {
          color: ${settings.blackAndWhite ? settings.foregroundColor : 'purple'} !important;
        }
        a:hover {
          color: ${settings.blackAndWhite ? settings.foregroundColor : 'red'} !important;
        }
      ` : ''}

      body {
        font-size: ${settings.fontSize}px !important;
        word-spacing: ${settings.wordSpacing}px !important;
        letter-spacing: ${settings.letterSpacing}px !important;
        line-height: ${settings.lineHeight} !important;
        ${(settings.fontFamily !== FONT_OPTIONS[0].value) ? `font-family: ${settings.fontFamily} !important;` : ''}
        background-color: ${settings.backgroundColor} !important;
        color: ${settings.foregroundColor} !important;
      }

      /* Ensure text case is applied globally */
      ${settings.textCase !== 'none' ? `
        * {
          text-transform: ${settings.textCase} !important;
        }
      ` : ''}

      /* Font loading */
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('https://cdn.jsdelivr.net/npm/react-disks@1.7.3/dist/OpenDyslexic-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'OpenSans';
        src: url('https://github.com/edx/ux-pattern-library/raw/refs/heads/master/pattern-library/fonts/OpenSans/OpenSans-Regular-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Luciole';
        src: url('https://forge.apps.education.fr/charles.poulmaire/documentation/-/raw/main/_client/fonts/luciole/Luciole-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Atkinson Hyperlegible';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url('https://cdn.jsdelivr.net/fontsource/fonts/atkinson-hyperlegible@latest/latin-400-normal.woff2') format('woff2'),
             url('https://cdn.jsdelivr.net/fontsource/fonts/atkinson-hyperlegible@latest/latin-400-normal.woff') format('woff');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
      }
    `;

    // Apply the global styles
    styleElement.textContent = globalStyles;

    // Cleanup function
    return () => {
      document.head.removeChild(styleElement);
      document.documentElement.style.removeProperty('fontSize');
      document.documentElement.style.removeProperty('wordSpacing');
      document.documentElement.style.removeProperty('letterSpacing');
      document.documentElement.style.removeProperty('lineHeight');
      document.documentElement.style.removeProperty('fontFamily');
      document.documentElement.style.removeProperty('backgroundColor');
      document.documentElement.style.removeProperty('color');
      document.documentElement.style.removeProperty('textTransform');
    };
  }, [
    settings.fontSize,
    settings.wordSpacing,
    settings.letterSpacing,
    settings.lineHeight,
    settings.fontFamily,
    settings.backgroundColor,
    settings.foregroundColor,
    settings.textCase,
    settings.removeBackgrounds,
    settings.cancelLayout,
    settings.leftAlignText,
    settings.numberListItems,
    settings.customLinks,
    settings.blackAndWhite
  ]);
}
