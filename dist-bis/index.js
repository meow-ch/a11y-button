import { jsxs as d, jsx as i, Fragment as F } from "react/jsx-runtime";
import { forwardRef as K, createElement as V, useState as C, useEffect as P, createContext as de, useCallback as L, useMemo as ee, useContext as be } from "react";
import { createPortal as Y } from "react-dom";
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), te = (...e) => e.filter((n, t, a) => !!n && n.trim() !== "" && a.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var me = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = K(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: a,
    className: r = "",
    children: l,
    iconNode: o,
    ...s
  }, c) => V(
    "svg",
    {
      ref: c,
      ...me,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: a ? Number(t) * 24 / Number(n) : t,
      className: te("lucide", r),
      ...s
    },
    [
      ...o.map(([u, y]) => V(u, y)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v = (e, n) => {
  const t = K(
    ({ className: a, ...r }, l) => V(he, {
      ref: l,
      iconNode: n,
      className: te(`lucide-${ye(e)}`, a),
      ...r
    })
  );
  return t.displayName = `${e}`, t;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], fe = v("EyeOff", ge);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], oe = v("Eye", pe);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], _e = v("LayoutGrid", Se);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = [
  [
    "path",
    { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z", key: "irua1i" }
  ],
  ["path", { d: "m5 2 5 5", key: "1lls2c" }],
  ["path", { d: "M2 13h15", key: "1hkzvu" }],
  ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z", key: "xk76lq" }]
], ke = v("PaintBucket", ve);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
], Ce = v("Palette", xe);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
  ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }]
], we = v("PersonStanding", ze);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], ne = v("RotateCcw", Ae);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], Ne = v("Save", $e);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], Re = v("Settings2", Le);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ae = v("Settings", Ee);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
], Oe = v("Type", Me);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ie = v("X", Pe), B = {
  "a11y-button-control-group": "ControlGroup-module__a11y-button-control-group___XkSpH",
  "a11y-button-control-group-title": "ControlGroup-module__a11y-button-control-group-title___IB7Al",
  "a11y-button-control-group-content": "ControlGroup-module__a11y-button-control-group-content___4XX1Q"
};
function le({ title: e, children: n, fontSize: t }) {
  const a = {
    "--a11y-group-gap": `${t * 0.5}px`,
    "--a11y-title-font-size": `${t * 1.25}px`,
    "--a11y-title-padding": `${t * 0.5}px`,
    "--a11y-content-gap": `${t * 0.75}px`
  };
  return /* @__PURE__ */ d("div", { className: B["a11y-button-control-group"], style: a, children: [
    /* @__PURE__ */ i("h3", { className: B["a11y-button-control-group-title"], children: e }),
    /* @__PURE__ */ i("div", { className: B["a11y-button-control-group-content"], children: n })
  ] });
}
const j = {
  "a11y-button-icon": "IconButton-module__a11y-button-icon___-yxBa",
  "a11y-button-icon-active": "IconButton-module__a11y-button-icon-active___RRTY5"
};
function $({
  icon: e,
  label: n,
  variant: t = "secondary",
  size: a = 24,
  active: r = !1,
  disabled: l = !1,
  text: o,
  className: s,
  ...c
}) {
  const u = {
    "--a11y-icon-button-gap": `${a * 0.25}px`,
    "--a11y-icon-button-min-width": o ? `${a * 2.5}px` : `${a * 1.5}px`,
    "--a11y-icon-button-height": `${a * 1.5}px`,
    "--a11y-icon-button-padding": `${a * 0.25}px ${a * 0.5}px`,
    "--a11y-icon-button-font-size": `${a * 0.75}px`
  };
  return /* @__PURE__ */ d(
    "button",
    {
      ...c,
      "aria-label": n,
      disabled: l,
      className: `${j["a11y-button-icon"]} ${r ? j["a11y-button-icon-active"] : ""} ${s || ""}`,
      style: u,
      children: [
        e,
        o && /* @__PURE__ */ i("span", { children: o })
      ]
    }
  );
}
const De = {
  "a11y-button-group": "ButtonGroup-module__a11y-button-group___r9rr-"
};
function G({ children: e, gap: n = 8 }) {
  const t = {
    "--a11y-button-group-gap": `${n}px`
  };
  return /* @__PURE__ */ i("div", { className: De["a11y-button-group"], style: t, children: e });
}
const re = "Default", Te = [
  { value: "", label: re, description: "From website" },
  { value: "Arial", label: "Arial", description: "Standard sans-serif font" },
  { value: "OpenDyslexic", label: "OpenDyslexic", description: "Designed for dyslexic readers" },
  { value: "Atkinson Hyperlegible", label: "Atkinson Hyperlegible", description: "High legibility font" },
  { value: "OpenSans", label: "OpenSans", description: "Good font font" },
  { value: "Luciole", label: "Luciole", description: "Optimized for low vision" }
], se = {
  none: {},
  "clear-reading": {
    fontSize: 24,
    removeBackgrounds: !0,
    foregroundColor: "#0000FF",
    backgroundColor: "#FFFFFF",
    wordSpacing: 4,
    lineHeight: 2
  },
  "easy-reading": {
    fontSize: 20,
    showReadingMask: !0,
    lineHeight: 1.8,
    wordSpacing: 3,
    letterSpacing: 1
  }
}, X = {
  en: {
    Hide: "Hide",
    Show: "Show",
    Profile: "Profile",
    "{{hideShow}} Accessibility Settings": "{{hideShow}} Accessibility Settings",
    Enable: "Enable",
    Disable: "Disable",
    "From website": "From website",
    "Standard sans-serif font": "Standard sans-serif font",
    "Designed for dyslexic readers": "Designed for dyslexic readers",
    "High legibility font": "High legibility font",
    "Good font font": "Good font font",
    "Optimized for low vision": "Optimized for low vision",
    "Press Esc to close": "Press Esc to close",
    "Close reading mask": "Close reading mask",
    "You have unsaved changes. Would you like to save them before closing?": "You have unsaved changes. Would you like to save them before closing?",
    "Warning: The selected colors have low contrast (ratio: {{ratio}}:1).": "Warning: The selected colors have low contrast (ratio: {{ratio}}:1).",
    " WCAG guidelines recommend a minimum of 4.5:1.\n\n": ` WCAG guidelines recommend a minimum of 4.5:1.

`,
    "Do you want to proceed with these colors anyway?": "Do you want to proceed with these colors anyway?",
    Accessibility: "Accessibility",
    "Save Changes": "Save Changes",
    Revert: "Revert",
    "Less Options": "Less Options",
    "More Options": "More Options",
    language: "language",
    "Visual Aids": "Visual Aids",
    "Background Color": "Background Color",
    "Text Color": "Text Color",
    "Reading Mask": "Reading Mask",
    "Remove Backgrounds": "Remove Backgrounds",
    "Simplify Layout": "Simplify Layout",
    "Left Align Text": "Left Align Text",
    "Number Lists": "Number Lists",
    "Highlight Links": "Highlight Links",
    "Text Readability": "Text Readability",
    "Font Size": "Font Size",
    "Decrease font size": "Decrease font size",
    "Increase font size": "Increase font size",
    "Font Family": "Font Family",
    "Text Case": "Text Case",
    "Normal Case": "Normal Case",
    UPPERCASE: "UPPERCASE",
    lowercase: "lowercase",
    "Capitalize Words": "Capitalize Words",
    "Word Spacing": "Word Spacing",
    "Letter Spacing": "Letter Spacing",
    "Line Height": "Line Height",
    "Decrease {{label}}": "Decrease {{label}}",
    "Increase {{label}}": "Increase {{label}}",
    "{{enableDisable}} reading mask": "{{enableDisable}} reading mask",
    "{{enableDisable}} black and white mode": "{{enableDisable}} black and white mode",
    Custom: "Custom",
    "Clear Reading": "Clear Reading",
    "Easy Reading": "Easy Reading",
    "Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.": "Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.",
    "Reset All Settings": "Reset All Settings"
  },
  fr: {
    Hide: "Cacher",
    Show: "Afficher",
    Profile: "Profil",
    "{{hideShow}} Accessibility Settings": "{{hideShow}} Paramètres d'accessibilité",
    Enable: "Activer",
    Disable: "Désactiver",
    "From website": "Du site",
    "Standard sans-serif font": "Police sans-serif standard",
    "Designed for dyslexic readers": "Conçue pour les lecteurs dyslexiques",
    "High legibility font": "Police à haute lisibilité",
    "Good font font": "Bonne police",
    "Optimized for low vision": "Optimisée pour les personnes malvoyantes",
    "Press Esc to close": "Appuyez sur Échap pour fermer",
    "Close reading mask": "Fermer le masque de lecture",
    "You have unsaved changes. Would you like to save them before closing?": "Vous avez des modifications non enregistrées. Voulez-vous les enregistrer avant de fermer ?",
    "Warning: The selected colors have low contrast (ratio: {{ratio}}:1).": "Attention : Les couleurs sélectionnées ont un faible contraste (ratio : {{ratio}}:1).",
    " WCAG guidelines recommend a minimum of 4.5:1.\n\n": ` Les directives WCAG recommandent un minimum de 4.5:1.

`,
    "Do you want to proceed with these colors anyway?": "Voulez-vous quand même continuer avec ces couleurs ?",
    Accessibility: "Accessibilité",
    "Save Changes": "Enregistrer",
    Revert: "Annuler",
    "Less Options": "Moins d'options",
    "More Options": "Plus d'options",
    language: "langue",
    "Visual Aids": "Aides visuelles",
    "Background Color": "Couleur de fond",
    "Text Color": "Couleur du texte",
    "Reading Mask": "Masque de lecture",
    "Remove Backgrounds": "Supprimer les fonds",
    "Simplify Layout": "Simplifier la mise en page",
    "Left Align Text": "Aligner à gauche",
    "Number Lists": "Numéroter les listes",
    "Highlight Links": "Surligner les liens",
    "Text Readability": "Lisibilité du texte",
    "Font Size": "Taille de police",
    "Decrease font size": "Diminuer la taille de police",
    "Increase font size": "Augmenter la taille de police",
    "Font Family": "Police",
    "Text Case": "Casse du texte",
    "Normal Case": "Casse normale",
    UPPERCASE: "MAJUSCULES",
    lowercase: "minuscules",
    "Capitalize Words": "Première Lettre En Majuscule",
    "Word Spacing": "Espacement des mots",
    "Letter Spacing": "Espacement des lettres",
    "Line Height": "Hauteur de ligne",
    "Decrease {{label}}": "Diminuer {{label}}",
    "Increase {{label}}": "Augmenter {{label}}",
    "{{enableDisable}} reading mask": "{{enableDisable}} le masque de lecture",
    "{{enableDisable}} black and white mode": "{{enableDisable}} le mode noir et blanc",
    Custom: "Personnalisé",
    "Clear Reading": "Lecture claire",
    "Easy Reading": "Lecture facile",
    "Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.": "Êtes-vous sûr de vouloir réinitialiser tous les paramètres à leurs valeurs par défaut ? Vous devrez enregistrer les modifications pour les rendre permanentes.",
    "Reset All Settings": "Réinitialiser tout"
  },
  de: {
    Hide: "Verbergen",
    Show: "Anzeigen",
    Profile: "Profil",
    "{{hideShow}} Accessibility Settings": "{{hideShow}} Barrierefreiheits-Einstellungen",
    Enable: "Aktivieren",
    Disable: "Deaktivieren",
    "From website": "Von der Website",
    "Standard sans-serif font": "Standard Sans-Serif-Schriftart",
    "Designed for dyslexic readers": "Für Legastheniker entworfen",
    "High legibility font": "Schriftart mit hoher Lesbarkeit",
    "Good font font": "Gute Schriftart",
    "Optimized for low vision": "Für Sehbehinderte optimiert",
    "Press Esc to close": "Drücken Sie Esc zum Schließen",
    "Close reading mask": "Lesemaske schließen",
    "You have unsaved changes. Would you like to save them before closing?": "Sie haben ungespeicherte Änderungen. Möchten Sie diese vor dem Schließen speichern?",
    "Warning: The selected colors have low contrast (ratio: {{ratio}}:1).": "Warnung: Die ausgewählten Farben haben einen niedrigen Kontrast (Verhältnis: {{ratio}}:1).",
    " WCAG guidelines recommend a minimum of 4.5:1.\n\n": ` WCAG-Richtlinien empfehlen mindestens 4.5:1.

`,
    "Do you want to proceed with these colors anyway?": "Möchten Sie trotzdem mit diesen Farben fortfahren?",
    Accessibility: "Barrierefreiheit",
    "Save Changes": "Speichern",
    Revert: "Zurücksetzen",
    "Less Options": "Weniger Optionen",
    "More Options": "Mehr Optionen",
    language: "Sprache",
    "Visual Aids": "Visuelle Hilfen",
    "Background Color": "Hintergrundfarbe",
    "Text Color": "Textfarbe",
    "Reading Mask": "Lesemaske",
    "Remove Backgrounds": "Hintergründe entfernen",
    "Simplify Layout": "Layout vereinfachen",
    "Left Align Text": "Linksbündig",
    "Number Lists": "Listen nummerieren",
    "Highlight Links": "Links hervorheben",
    "Text Readability": "Textlesbarkeit",
    "Font Size": "Schriftgröße",
    "Decrease font size": "Schriftgröße verringern",
    "Increase font size": "Schriftgröße erhöhen",
    "Font Family": "Schriftart",
    "Text Case": "Schreibweise",
    "Normal Case": "Normale Schreibweise",
    UPPERCASE: "GROßBUCHSTABEN",
    lowercase: "kleinbuchstaben",
    "Capitalize Words": "Wörter Großschreiben",
    "Word Spacing": "Wortabstand",
    "Letter Spacing": "Buchstabenabstand",
    "Line Height": "Zeilenhöhe",
    "Decrease {{label}}": "{{label}} verringern",
    "Increase {{label}}": "{{label}} erhöhen",
    "{{enableDisable}} reading mask": "Lesemaske {{enableDisable}}",
    "{{enableDisable}} black and white mode": "Schwarz-Weiß-Modus {{enableDisable}}",
    Custom: "Benutzerdefiniert",
    "Clear Reading": "Klares Lesen",
    "Easy Reading": "Einfaches Lesen",
    "Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.": "Sind Sie sicher, dass Sie alle Einstellungen auf die Standardeinstellungen zurücksetzen möchten? Sie müssen die Änderungen speichern, um sie dauerhaft zu machen.",
    "Reset All Settings": "Alle Einstellungen zurücksetzen"
  },
  it: {
    Hide: "Nascondi",
    Show: "Mostra",
    Profile: "Profilo",
    "{{hideShow}} Accessibility Settings": "{{hideShow}} Impostazioni di accessibilità",
    Enable: "Abilita",
    Disable: "Disabilita",
    "From website": "Dal sito web",
    "Standard sans-serif font": "Carattere sans-serif standard",
    "Designed for dyslexic readers": "Progettato per lettori dislessici",
    "High legibility font": "Carattere ad alta leggibilità",
    "Good font font": "Buon carattere",
    "Optimized for low vision": "Ottimizzato per ipovedenti",
    "Press Esc to close": "Premi Esc per chiudere",
    "Close reading mask": "Chiudi maschera di lettura",
    "You have unsaved changes. Would you like to save them before closing?": "Hai modifiche non salvate. Vuoi salvarle prima di chiudere?",
    "Warning: The selected colors have low contrast (ratio: {{ratio}}:1).": "Attenzione: I colori selezionati hanno un contrasto basso (rapporto: {{ratio}}:1).",
    " WCAG guidelines recommend a minimum of 4.5:1.\n\n": ` Le linee guida WCAG raccomandano un minimo di 4.5:1.

`,
    "Do you want to proceed with these colors anyway?": "Vuoi procedere comunque con questi colori?",
    Accessibility: "Accessibilità",
    "Save Changes": "Salva",
    Revert: "Ripristina",
    "Less Options": "Meno opzioni",
    "More Options": "Più opzioni",
    language: "Lingua",
    "Visual Aids": "Ausili visivi",
    "Background Color": "Colore sfondo",
    "Text Color": "Colore testo",
    "Reading Mask": "Maschera lettura",
    "Remove Backgrounds": "Rimuovi sfondi",
    "Simplify Layout": "Semplifica layout",
    "Left Align Text": "Allinea a sinistra",
    "Number Lists": "Numera liste",
    "Highlight Links": "Evidenzia link",
    "Text Readability": "Leggibilità testo",
    "Font Size": "Dimensione carattere",
    "Decrease font size": "Diminuisci dimensione carattere",
    "Increase font size": "Aumenta dimensione carattere",
    "Font Family": "Tipo di carattere",
    "Text Case": "Maiuscole/Minuscole",
    "Normal Case": "Normale",
    UPPERCASE: "MAIUSCOLO",
    lowercase: "minuscolo",
    "Capitalize Words": "Prima Lettera Maiuscola",
    "Word Spacing": "Spaziatura parole",
    "Letter Spacing": "Spaziatura lettere",
    "Line Height": "Altezza riga",
    "Decrease {{label}}": "Diminuisci {{label}}",
    "Increase {{label}}": "Aumenta {{label}}",
    "{{enableDisable}} reading mask": "{{enableDisable}} la maschera di lettura",
    "{{enableDisable}} black and white mode": "{{enableDisable}} la modalità bianco e nero",
    Custom: "Personalizzato",
    "Clear Reading": "Lettura chiara",
    "Easy Reading": "Lettura facile",
    "Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.": "Sei sicuro di voler reimpostare tutte le impostazioni ai valori predefiniti? Dovrai salvare le modifiche per renderle permanenti.",
    "Reset All Settings": "Reimposta tutto"
  }
}, Fe = {
  en: "EN",
  fr: "FR",
  de: "DE",
  it: "IT"
};
function We(e, n) {
  return e.replace(
    /\{\{(.*?)\}\}/g,
    (t, a) => {
      var r;
      return ((r = n[a.trim()]) == null ? void 0 : r.toString()) ?? `{{${a}}}`;
    }
  );
}
function Be(e, n, t) {
  console.log("TR---", e, n, t);
  let a = X[e][n] || X.en[n];
  return typeof a > "u" ? (console.log(`Missing translation for: '${n}' in language: ${e}`), n) : t ? We(a, t) : a;
}
const He = () => {
  const [e, n] = C(Te);
  return P(() => {
    if (e[0].value !== "") return;
    const t = window.getComputedStyle(document.body).fontFamily;
    n((a) => {
      const [r, ...l] = a;
      return [{ ...r, value: t }, ...l];
    });
  }, [e]), e;
}, q = "a11y-settings", S = {
  fontSize: 16,
  wordSpacing: 3,
  letterSpacing: 2,
  lineHeight: 1.5,
  // saving the label instead of full option prevents rerender after website fontFamily value lodaded
  fontOptionLabel: re,
  textCase: "none",
  cancelLayout: !1,
  leftAlignText: !1,
  numberListItems: !1,
  customLinks: !1,
  showReadingMask: !1,
  backgroundColor: "#ffffff",
  foregroundColor: "#000000",
  removeBackgrounds: !1,
  currentProfile: "none",
  blackAndWhite: !1,
  language: "en"
};
function Ie() {
  try {
    const e = localStorage.getItem(q);
    if (e) {
      const n = JSON.parse(e);
      if (n.settings && Object.keys(n.settings).sort().join(",") === Object.keys(S).sort().join(","))
        return n;
      console.warn("Stored settings are invalid or outdated. Resetting to default."), localStorage.removeItem(q);
    }
  } catch (e) {
    console.error("Failed to load accessibility settings:", e);
  }
  return {
    settings: S,
    isEnabled: !0
  };
}
function Z(e) {
  try {
    localStorage.setItem(q, JSON.stringify(e));
  } catch (n) {
    console.error("Failed to save accessibility settings:", n);
  }
}
const ce = de(null);
function dt({ children: e }) {
  const n = Ie(), [t, a] = C(n.settings), [r, l] = C(n.settings), [o, s] = C(n.isEnabled), [c, u] = C(null), y = He(), m = JSON.stringify(t) !== JSON.stringify(r);
  P(() => {
    Z({
      settings: r,
      isEnabled: o
    });
  }, [r, o]);
  const k = L((h) => {
    console.log("nes settings", h), Object.keys(h).length === 1 && h.language ? (a((f) => ({
      ...f,
      language: h.language
    })), l((f) => ({
      ...f,
      language: h.language
    }))) : o && a((f) => ({
      ...f,
      ...h,
      currentProfile: "none"
    }));
  }, [o]), g = L((h) => {
    s(h), h ? c && (a(c), l(c)) : (u(r), a(S), l(S)), Z({
      settings: h && c ? c : S,
      isEnabled: h
    });
  }, [r, S, c]), p = L(() => {
    a(S);
  }, [S]), x = (h) => {
    if (h === "none")
      a(S);
    else {
      const f = se[h];
      a({
        ...S,
        ...f,
        currentProfile: h
      });
    }
  }, b = L(() => {
    l(t);
  }, [t]), w = L(() => {
    a(r);
  }, [r]), z = (o ? t.language : r.language) || S.language, E = L((h, f) => Be(z, h, f), [z]), R = ee(() => ({
    visibleSettings: o ? t : S,
    savedSettings: o ? r : S,
    language: z,
    isEnabled: o,
    hasChanges: m,
    fontOptions: y,
    updateSettings: k,
    setEnabled: g,
    resetSettings: p,
    setProfile: x,
    commitChanges: b,
    rollbackChanges: w,
    t: E
  }), [
    o,
    t,
    r,
    z,
    m,
    y,
    k,
    g,
    p,
    x,
    b,
    w,
    E
  ]);
  return /* @__PURE__ */ i(ce.Provider, { value: R, children: e });
}
function N() {
  const e = be(ce);
  if (!e)
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  return e;
}
const _ = {
  "a11y-button-text-control": "TextControls-module__a11y-button-text-control___IZBLB",
  "a11y-button-text-label": "TextControls-module__a11y-button-text-label___3gOZ3",
  "a11y-button-text-select": "TextControls-module__a11y-button-text-select___JcPUE",
  "a11y-button-text-value": "TextControls-module__a11y-button-text-value___XD0ee"
};
function Ve({ settings: e, onUpdate: n }) {
  const { t, fontOptions: a } = N(), r = (o) => {
    const s = [16, 24, 36, 54, 72], c = s.indexOf(e.fontSize), u = o ? c + 1 : c - 1;
    u >= 0 && u < s.length && n({ fontSize: s[u] });
  }, l = {
    "--a11y-control-gap": `${e.fontSize}px`,
    "--a11y-control-padding": `${e.fontSize * 0.5}px 0`,
    "--a11y-label-font-size": `${e.fontSize}px`,
    "--a11y-select-padding": `${e.fontSize * 0.25}px ${e.fontSize * 0.5}px`,
    "--a11y-select-font-size": `${e.fontSize}px`,
    "--a11y-select-height": `${e.fontSize * 2}px`,
    "--a11y-select-min-width": `${e.fontSize * 10}px`,
    "--a11y-value-min-width": `${e.fontSize * 2}px`,
    "--a11y-value-font-size": `${e.fontSize}px`
  };
  return /* @__PURE__ */ d(le, { title: t("Text Readability"), fontSize: e.fontSize, children: [
    /* @__PURE__ */ d("div", { className: _["a11y-button-text-control"], style: l, children: [
      /* @__PURE__ */ i("label", { className: _["a11y-button-text-label"], children: t("Font Size") }),
      /* @__PURE__ */ d(G, { gap: e.fontSize * 0.5, children: [
        /* @__PURE__ */ i(
          $,
          {
            icon: /* @__PURE__ */ i("span", { style: { fontWeight: "bold" }, children: "A" }),
            text: "-",
            label: t("Decrease font size"),
            onClick: () => r(!1),
            disabled: e.fontSize <= 16,
            size: e.fontSize
          }
        ),
        /* @__PURE__ */ i("span", { className: _["a11y-button-text-value"], children: e.fontSize }),
        /* @__PURE__ */ i(
          $,
          {
            icon: /* @__PURE__ */ i("span", { style: { fontWeight: "bold" }, children: "A" }),
            text: "+",
            label: t("Increase font size"),
            onClick: () => r(!0),
            disabled: e.fontSize >= 72,
            size: e.fontSize
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: _["a11y-button-text-control"], style: l, children: [
      /* @__PURE__ */ i("label", { className: _["a11y-button-text-label"], children: t("Font Family") }),
      /* @__PURE__ */ i(
        "select",
        {
          value: e.fontOptionLabel,
          onChange: (o) => n({ fontOptionLabel: o.target.value }),
          className: _["a11y-button-text-select"],
          children: a.map((o) => /* @__PURE__ */ d(
            "option",
            {
              value: o.label,
              style: { fontFamily: o.value },
              children: [
                o.label,
                " - ",
                t(o.description)
              ]
            },
            o.label
          ))
        }
      )
    ] }),
    /* @__PURE__ */ d("div", { className: _["a11y-button-text-control"], style: l, children: [
      /* @__PURE__ */ i("label", { className: _["a11y-button-text-label"], children: t("Text Case") }),
      /* @__PURE__ */ d(
        "select",
        {
          value: e.textCase,
          onChange: (o) => n({ textCase: o.target.value }),
          className: _["a11y-button-text-select"],
          children: [
            /* @__PURE__ */ i("option", { value: "none", children: t("Normal Case") }),
            /* @__PURE__ */ i("option", { value: "uppercase", children: t("UPPERCASE") }),
            /* @__PURE__ */ i("option", { value: "lowercase", children: t("lowercase") }),
            /* @__PURE__ */ i("option", { value: "capitalize", children: t("Capitalize Words") })
          ]
        }
      )
    ] }),
    [
      { label: t("Word Spacing"), key: "wordSpacing", min: 0, max: 16 },
      { label: t("Letter Spacing"), key: "letterSpacing", min: 0, max: 8 },
      { label: t("Line Height"), key: "lineHeight", min: 1, max: 3 }
    ].map(({ label: o, key: s, min: c, max: u }) => /* @__PURE__ */ d("div", { className: _["a11y-button-text-control"], style: l, children: [
      /* @__PURE__ */ i("label", { className: _["a11y-button-text-label"], children: o }),
      /* @__PURE__ */ d(G, { gap: e.fontSize * 0.5, children: [
        /* @__PURE__ */ i(
          $,
          {
            icon: /* @__PURE__ */ i("span", { children: "-" }),
            label: t("Decrease {{label}}", { label: o }),
            onClick: () => n({ [s]: Math.max(c, e[s] - 1) }),
            disabled: e[s] <= c,
            size: e.fontSize
          }
        ),
        /* @__PURE__ */ i("span", { className: _["a11y-button-text-value"], children: e[s] }),
        /* @__PURE__ */ i(
          $,
          {
            icon: /* @__PURE__ */ i("span", { children: "+" }),
            label: t("Increase {{label}}", { label: o }),
            onClick: () => n({ [s]: Math.min(u, e[s] + 1) }),
            disabled: e[s] >= u,
            size: e.fontSize
          }
        )
      ] })
    ] }, s))
  ] });
}
function Ge(e, n) {
  const t = (g, p, x) => {
    const [b, w, z] = [g, p, x].map((E) => {
      const R = E / 255;
      return R <= 0.03928 ? R / 12.92 : Math.pow((R + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * b + 0.7152 * w + 0.0722 * z;
  }, a = (g) => {
    const p = parseInt(g.slice(1, 3), 16), x = parseInt(g.slice(3, 5), 16), b = parseInt(g.slice(5, 7), 16);
    return [p, x, b];
  }, [r, l, o] = a(e), [s, c, u] = a(n), y = t(r, l, o), m = t(s, c, u);
  return (Math.max(y, m) + 0.05) / (Math.min(y, m) + 0.05);
}
async function qe(e, n) {
  const t = Ge(e, n);
  return t < 4.5 ? window.confirm(
    `Warning: The selected colors have low contrast (${t.toFixed(2)}:1).

WCAG guidelines recommend a minimum contrast ratio of 4.5:1 for better readability.

Do you want to proceed with these colors anyway?`
  ) : !0;
}
const A = {
  "a11y-button-visual-control": "VisualControls-module__a11y-button-visual-control___fPfvJ",
  "a11y-button-visual-label": "VisualControls-module__a11y-button-visual-label___k9xUu",
  "a11y-button-visual-color": "VisualControls-module__a11y-button-visual-color___y92Y2",
  "a11y-button-visual-checkbox": "VisualControls-module__a11y-button-visual-checkbox___QK2IR"
};
function Ye({ settings: e, onUpdate: n }) {
  const { t } = N(), a = async (l, o) => {
    const s = l === "backgroundColor" ? e.foregroundColor : e.backgroundColor;
    await qe(o, s) && n({ [l]: o });
  }, r = {
    "--a11y-control-gap": `${e.fontSize}px`,
    "--a11y-control-padding": `${e.fontSize * 0.5}px 0`,
    "--a11y-label-font-size": `${e.fontSize}px`,
    "--a11y-label-min-width": `${e.fontSize * 7}px`,
    "--a11y-color-size": `${e.fontSize * 2}px`,
    "--a11y-checkbox-size": `${e.fontSize * 1.5}px`,
    "--a11y-border-color": e.foregroundColor,
    "--a11y-focus-color": "rgba(0, 0, 0, 0.4)"
  };
  return /* @__PURE__ */ d(le, { title: t("Visual Aids"), fontSize: e.fontSize, children: [
    /* @__PURE__ */ d("div", { className: A["a11y-button-visual-control"], style: r, children: [
      /* @__PURE__ */ i("label", { className: A["a11y-button-visual-label"], children: t("Background Color") }),
      /* @__PURE__ */ i(
        "input",
        {
          type: "color",
          value: e.backgroundColor,
          onChange: (l) => a("backgroundColor", l.target.value),
          className: A["a11y-button-visual-color"]
        }
      )
    ] }),
    /* @__PURE__ */ d("div", { className: A["a11y-button-visual-control"], style: r, children: [
      /* @__PURE__ */ i("label", { className: A["a11y-button-visual-label"], children: t("Text Color") }),
      /* @__PURE__ */ i(
        "input",
        {
          type: "color",
          value: e.foregroundColor,
          onChange: (l) => a("foregroundColor", l.target.value),
          className: A["a11y-button-visual-color"]
        }
      )
    ] }),
    [
      { label: t("Reading Mask"), key: "showReadingMask" },
      { label: t("Remove Backgrounds"), key: "removeBackgrounds" },
      { label: t("Simplify Layout"), key: "cancelLayout" },
      { label: t("Left Align Text"), key: "leftAlignText" },
      { label: t("Number Lists"), key: "numberListItems" },
      { label: t("Highlight Links"), key: "customLinks" }
    ].map(({ label: l, key: o }) => /* @__PURE__ */ d("div", { className: A["a11y-button-visual-control"], style: r, children: [
      /* @__PURE__ */ i("label", { className: A["a11y-button-visual-label"], children: l }),
      /* @__PURE__ */ i(
        "input",
        {
          type: "checkbox",
          checked: e[o],
          onChange: (s) => n({ [o]: s.target.checked }),
          className: A["a11y-button-visual-checkbox"]
        }
      )
    ] }, o))
  ] });
}
const H = {
  "a11y-button-base": "Button-module__a11y-button-base___sek8h",
  "a11y-button-icon": "Button-module__a11y-button-icon___gozst",
  "a11y-button-primary": "Button-module__a11y-button-primary___w2q69",
  "a11y-button-secondary": "Button-module__a11y-button-secondary___mG9hG",
  "a11y-button-danger": "Button-module__a11y-button-danger___k8AE1",
  "a11y-button-ghost": "Button-module__a11y-button-ghost___1VmQx"
}, je = {
  sm: 0.5,
  md: 0.75,
  lg: 1
};
function W({
  variant: e = "secondary",
  size: n = "md",
  icon: t,
  children: a,
  fullWidth: r = !1,
  fontSize: l = 16,
  disabled: o,
  className: s,
  ...c
}) {
  const u = {
    "--a11y-button-font-size": `${l}px`,
    "--a11y-button-gap": `${l * 0.5}px`,
    "--a11y-button-padding": `${l * je[n]}px`,
    "--a11y-button-width": r ? "100%" : "auto",
    "--a11y-button-icon-size": `${l * 1.2}px`,
    "--a11y-button-focus-color": "rgba(0, 0, 0, 0.4)"
  };
  return /* @__PURE__ */ d(
    "button",
    {
      ...c,
      disabled: o,
      className: `${H["a11y-button-base"]} ${H[`a11y-button-${e}`]} ${s || ""}`,
      style: u,
      children: [
        t && /* @__PURE__ */ i("span", { className: H["a11y-button-icon"], children: t }),
        a
      ]
    }
  );
}
const Xe = "AccessibilityPanel-module__panel___nUuIX", Ze = "AccessibilityPanel-module__column___E6CLD", Ue = "AccessibilityPanel-module__columnNormal___bAdDH", Je = "AccessibilityPanel-module__columnLarge___J5rrb", T = {
  panel: Xe,
  column: Ze,
  columnNormal: Ue,
  columnLarge: Je
};
function Qe({ settings: e, updateSettings: n, resetSettings: t }) {
  const { t: a } = N(), r = () => {
    window.confirm(a("Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.")) && t();
  }, l = `${T.column} ${e.fontSize <= 24 ? T.columnNormal : T.columnLarge}`;
  return /* @__PURE__ */ d(
    "div",
    {
      className: T.panel,
      style: {
        gap: `${e.fontSize * 2}px`,
        "--font-size": e.fontSize * 2
      },
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: l,
            style: {
              gap: `${e.fontSize * 2}px`
            },
            children: /* @__PURE__ */ i(
              Ve,
              {
                settings: e,
                onUpdate: n
              }
            )
          }
        ),
        /* @__PURE__ */ d(
          "div",
          {
            className: l,
            style: {
              gap: `${e.fontSize * 2}px`
            },
            children: [
              /* @__PURE__ */ i(
                Ye,
                {
                  settings: e,
                  onUpdate: n
                }
              ),
              /* @__PURE__ */ i(
                W,
                {
                  variant: "danger",
                  icon: /* @__PURE__ */ i(ne, { size: e.fontSize }),
                  onClick: r,
                  fontSize: e.fontSize,
                  fullWidth: !0,
                  children: a("Reset All Settings")
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const M = {
  "a11y-button-mask-top": "ReadingMask-module__a11y-button-mask-top___-XlCa",
  "a11y-button-mask-bottom": "ReadingMask-module__a11y-button-mask-bottom___J-Syz",
  "a11y-button-mask-gap": "ReadingMask-module__a11y-button-mask-gap___dmjPK",
  "a11y-button-mask-close-container": "ReadingMask-module__a11y-button-mask-close-container___JQ0Mc",
  "a11y-button-mask-close-button": "ReadingMask-module__a11y-button-mask-close-button___Xbzhq",
  "a11y-button-mask-hint": "ReadingMask-module__a11y-button-mask-hint___kZIAC"
};
function Ke({ isEnabled: e }) {
  const [n, t] = C({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }), [a, r] = C(!1), { visibleSettings: l, updateSettings: o, t: s } = N(), c = ee(() => {
    const b = (l == null ? void 0 : l.fontSize) ?? 16, w = 50, z = b / 16;
    return Math.max(w, w * z);
  }, [l == null ? void 0 : l.fontSize]), u = c / 2, y = L((b) => {
    t({
      x: b.clientX,
      y: b.clientY + window.scrollY
    }), r(b.clientX > window.innerWidth - 100);
  }, []), m = L(
    (b) => {
      b.key === "Escape" && o({ showReadingMask: !1 });
    },
    [o]
  );
  if (P(() => {
    if (e)
      return window.addEventListener("mousemove", y, { passive: !0 }), window.addEventListener("keydown", m), () => {
        window.removeEventListener("mousemove", y), window.removeEventListener("keydown", m);
      };
  }, [e, y, m]), !e || !l) return null;
  const k = {
    bottom: `calc(100vh - ${n.y - u}px)`
  }, g = {
    top: `${n.y + u}px`
  }, p = {
    top: `${n.y - u}px`,
    height: `${c}px`
  }, x = {
    top: `${n.y - u + c / 2}px`,
    transform: "translateY(-50%)"
  };
  return /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ i("div", { className: M["a11y-button-mask-top"], style: k, children: /* @__PURE__ */ i("div", { className: M["a11y-button-mask-hint"], children: s("Press Esc to close") }) }),
    /* @__PURE__ */ i("div", { className: M["a11y-button-mask-bottom"], style: g }),
    /* @__PURE__ */ i("div", { className: M["a11y-button-mask-gap"], style: p }),
    a && /* @__PURE__ */ i(
      "div",
      {
        className: M["a11y-button-mask-close-container"],
        style: x,
        children: /* @__PURE__ */ i(
          "button",
          {
            onClick: () => o({ showReadingMask: !1 }),
            className: M["a11y-button-mask-close-button"],
            "aria-label": s("Close reading mask"),
            children: /* @__PURE__ */ i(ie, { size: 24 })
          }
        )
      }
    )
  ] });
}
const U = {
  "a11y-button-quick-controls": "QuickControls-module__a11y-button-quick-controls___HlIFO",
  "a11y-button-quick-divider": "QuickControls-module__a11y-button-quick-divider___Me7bb"
};
function et({ settings: e, onSettingsChange: n, disabled: t }) {
  const { t: l } = N(), o = () => {
    e.blackAndWhite ? n({
      blackAndWhite: !1,
      removeBackgrounds: !1,
      backgroundColor: "#ffffff",
      foregroundColor: "#000000"
    }) : n({
      blackAndWhite: !0,
      removeBackgrounds: !0,
      backgroundColor: "#ffffff",
      foregroundColor: "#000000"
    });
  }, s = {
    "--a11y-controls-gap": `${e.fontSize * 0.5}px`,
    "--a11y-controls-opacity": t ? 0.5 : 1,
    "--a11y-controls-events": t ? "none" : "auto",
    "--a11y-divider-padding": `0 ${e.fontSize * 0.5}px`,
    "--a11y-divider-margin": `${e.fontSize * 0.25}px 0`,
    "--a11y-divider-gap": `${e.fontSize * 0.5}px`
  };
  return /* @__PURE__ */ d("div", { className: U["a11y-button-quick-controls"], style: s, children: [
    /* @__PURE__ */ d(G, { gap: e.fontSize * 0.25, children: [
      /* @__PURE__ */ i(
        $,
        {
          icon: /* @__PURE__ */ i("span", { style: { fontWeight: "bold" }, children: "A" }),
          text: "-",
          label: l("Decrease font size"),
          onClick: () => n({
            fontSize: Math.max(12, e.fontSize / 1.5)
          }),
          disabled: e.fontSize <= 12,
          size: e.fontSize
        }
      ),
      /* @__PURE__ */ i(
        $,
        {
          icon: /* @__PURE__ */ i("span", { style: { fontWeight: "bold" }, children: "A" }),
          text: "+",
          label: l("Increase font size"),
          onClick: () => n({
            fontSize: Math.min(72, e.fontSize * 1.5)
          }),
          disabled: e.fontSize >= 72,
          size: e.fontSize
        }
      )
    ] }),
    /* @__PURE__ */ d("div", { className: U["a11y-button-quick-divider"], children: [
      /* @__PURE__ */ i(
        $,
        {
          icon: e.showReadingMask ? /* @__PURE__ */ i(fe, { size: e.fontSize * 1.2 }) : /* @__PURE__ */ i(oe, { size: e.fontSize * 1.2 }),
          label: l("{{enableDisable}} reading mask", {
            enableDisable: e.showReadingMask ? l("Disable") : l("Enable")
          }),
          onClick: () => n({
            showReadingMask: !e.showReadingMask
          }),
          size: e.fontSize,
          active: e.showReadingMask
        }
      ),
      /* @__PURE__ */ i(
        $,
        {
          icon: /* @__PURE__ */ i(ke, { size: e.fontSize * 1.2 }),
          label: l("{{enableDisable}} black and white mode", {
            enableDisable: e.blackAndWhite ? l("Disable") : l("Enable")
          }),
          onClick: o,
          size: e.fontSize,
          active: e.blackAndWhite
        }
      )
    ] })
  ] });
}
function tt() {
  const [e, n] = C(null);
  P(() => {
    if (!e) {
      const r = window.getComputedStyle(document.documentElement), l = window.getComputedStyle(document.body), o = (c) => {
        const u = l.getPropertyValue(c), y = r.getPropertyValue(c), m = u || y;
        return m && m !== "normal" ? m : void 0;
      }, s = {
        fontSize: o("font-size"),
        backgroundColor: o("background-color"),
        color: o("color"),
        letterSpacing: o("letter-spacing"),
        wordSpacing: o("word-spacing"),
        lineHeight: o("line-height"),
        fontFamily: o("font-family"),
        textTransform: o("text-transform")
      };
      Object.keys(s).forEach((c) => {
        s[c] === void 0 && delete s[c];
      }), n(s), process.env.NODE_ENV === "development" && console.log("Original styles captured:", s);
    }
  }, [e]);
  const t = (r) => {
    if (!r) return;
    const l = r.match(/^(-?\d+\.?\d*)/);
    return l ? parseFloat(l[1]) : void 0;
  };
  return {
    originalStyles: e,
    getNumericValues: () => {
      if (!e) return {};
      const r = {};
      return e.fontSize && (r.fontSize = t(e.fontSize)), e.letterSpacing && (r.letterSpacing = t(e.letterSpacing)), e.wordSpacing && (r.wordSpacing = t(e.wordSpacing)), e.lineHeight && (r.lineHeight = t(e.lineHeight)), r;
    }
  };
}
function ot(e, n, t) {
  const { originalStyles: a } = tt();
  P(() => {
    const r = document.createElement("style"), l = document.createElement("style");
    r.setAttribute("data-a11y", "toolbar"), l.setAttribute("data-a11y", "global"), document.head.appendChild(r), t && document.head.appendChild(l);
    const o = `
      :root {
        --a11y-toolbar-font-size: ${e.fontSize}px;
        --a11y-toolbar-background: ${e.backgroundColor};
        --a11y-toolbar-foreground: ${e.foregroundColor};
        --a11y-toolbar-border-color: ${e.foregroundColor};
        --a11y-toolbar-focus-ring: rgba(0, 0, 0, 0.4);
      }
    `, s = t ? `
      /* Target all elements except toolbar components */
      *:not([class*="a11y-button-"]) {
        ${e.fontSize ? `font-size: ${e.fontSize}px !important;` : ""}
        ${e.letterSpacing ? `letter-spacing: ${e.letterSpacing}px !important;` : ""}
        ${e.wordSpacing ? `word-spacing: ${e.wordSpacing}px !important;` : ""}
        ${e.lineHeight ? `line-height: ${e.lineHeight} !important;` : ""}
        ${e.fontOptionLabel !== n.label ? `font-family: ${e.fontOptionLabel} !important;` : ""}
      }

      /* Background and text colors */
      html, body {
        ${e.backgroundColor ? `background-color: ${e.backgroundColor} !important;` : ""}
        ${e.foregroundColor ? `color: ${e.foregroundColor} !important;` : ""}
      }

      /* Handle black and white mode */
      ${e.blackAndWhite ? `
        img:not([class*="a11y-button-"]), 
        video:not([class*="a11y-button-"]), 
        canvas:not([class*="a11y-button-"]), 
        svg:not([class*="a11y-button-"]) {
          filter: grayscale(100%) !important;
        }
      ` : ""}

      /* Handle layout modifications */
      ${e.cancelLayout ? `
        *:not([class*="a11y-button-"]) {
          float: none !important;
          position: static !important;
          transform: none !important;
        }
      ` : ""}

      /* Handle text alignment */
      ${e.leftAlignText ? `
        *:not([class*="a11y-button-"]) {
          text-align: left !important;
        }
      ` : ""}

      /* Handle list styling */
      ${e.numberListItems ? `
        ul:not([class*="a11y-button-"]) {
          list-style-type: decimal !important;
        }
      ` : ""}

      /* Handle link styling */
      ${e.customLinks ? `
        a:not([class*="a11y-button-"]) {
          text-decoration: underline !important;
          color: ${e.blackAndWhite ? e.foregroundColor : "blue"} !important;
        }
        a:visited:not([class*="a11y-button-"]) {
          color: ${e.blackAndWhite ? e.foregroundColor : "purple"} !important;
        }
        a:hover:not([class*="a11y-button-"]) {
          color: ${e.blackAndWhite ? e.foregroundColor : "red"} !important;
        }
      ` : ""}

      /* Handle text case */
      ${e.textCase !== "none" ? `
        *:not([class*="a11y-button-"]) {
          text-transform: ${e.textCase} !important;
        }
      ` : ""}
    ` : "";
    return r.textContent = o, t && (l.textContent = s), () => {
      document.head.removeChild(r), document.head.contains(l) && document.head.removeChild(l);
    };
  }, [
    t,
    e,
    n.label,
    a
  ]);
}
const J = {
  "a11y-button-toggle": "Toggle-module__a11y-button-toggle___fd-fC",
  "a11y-button-toggle-knob": "Toggle-module__a11y-button-toggle-knob___XwcpR"
};
function nt({ checked: e, onChange: n, size: t = 24 }) {
  const { visibleSettings: a } = N(), { removeBackgrounds: r, blackAndWhite: l, backgroundColor: o, foregroundColor: s } = a, c = t * 2, u = t, y = u - 4, m = r || l, k = {
    "--a11y-toggle-width": `${c}px`,
    "--a11y-toggle-height": `${u}px`,
    "--a11y-toggle-knob-size": `${y}px`,
    "--a11y-toggle-border": m ? `2px solid ${s}` : "none",
    "--a11y-toggle-knob-bg": o,
    "--a11y-toggle-knob-shadow": m ? `0 0 0 2px ${s}` : "0 2px 4px rgba(0,0,0,0.2)"
  };
  return /* @__PURE__ */ i(
    "button",
    {
      className: J["a11y-button-toggle"],
      role: "switch",
      "aria-checked": e,
      onClick: () => n(!e),
      style: k,
      children: /* @__PURE__ */ i("span", { className: J["a11y-button-toggle-knob"] })
    }
  );
}
const I = {
  "a11y-button-profile": "ProfileSelector-module__a11y-button-profile___1ynJp",
  "a11y-button-profile-label": "ProfileSelector-module__a11y-button-profile-label___URqgl",
  "a11y-button-profile-select": "ProfileSelector-module__a11y-button-profile-select___hm0je"
};
function at({ currentProfile: e, onChange: n, disabled: t, fontSize: a }) {
  const { t: r } = N(), l = (s) => {
    const c = se[s];
    n(s, c);
  }, o = {
    "--a11y-profile-gap": "0.75rem",
    "--a11y-profile-padding": "0 1rem",
    "--a11y-label-font-size": `${a}px`,
    "--a11y-select-padding": `${a * 0.25}px ${a * 0.5}px`,
    "--a11y-select-font-size": `${a}px`,
    "--a11y-select-height": `${a * 2}px`
  };
  return /* @__PURE__ */ d("div", { className: I["a11y-button-profile"], style: o, children: [
    /* @__PURE__ */ i("span", { className: I["a11y-button-profile-label"], children: r("Profile") }),
    /* @__PURE__ */ d(
      "select",
      {
        value: e,
        onChange: (s) => l(s.target.value),
        disabled: t,
        className: I["a11y-button-profile-select"],
        children: [
          /* @__PURE__ */ i("option", { value: "none", children: r("Custom") }),
          /* @__PURE__ */ i("option", { value: "clear-reading", children: r("Clear Reading") }),
          /* @__PURE__ */ i("option", { value: "easy-reading", children: r("Easy Reading") })
        ]
      }
    )
  ] });
}
const Q = {
  "a11y-button-trigger": "AccessibilityButton-module__a11y-button-trigger___XeFtg",
  "a11y-button-icon": "AccessibilityButton-module__a11y-button-icon___S-3ao"
}, it = {
  settings: ae,
  eye: oe,
  accessibility: we,
  palette: Ce,
  type: Oe,
  layout: _e
}, D = "1.5rem";
function lt({
  isOpen: e,
  onClick: n,
  fontSize: t,
  position: a = "absolute",
  top: r,
  right: l,
  bottom: o = D,
  left: s,
  borderRadius: c = "50%",
  iconHandle: u = "accessibility",
  children: y,
  hideWhenOpen: m = !1
}) {
  const k = it[u] || ae, { t: g } = N();
  if ((m || a === "absolute") && e)
    return null;
  const p = {
    "--a11y-button-position": a,
    "--a11y-button-top": r || (a === "absolute" ? D : void 0),
    "--a11y-button-right": l || (!s && a === "fixed" ? D : void 0),
    "--a11y-button-bottom": o || (a === "fixed" ? D : void 0),
    "--a11y-button-left": s || (a === "absolute" ? D : void 0),
    "--a11y-button-size": `${t * 3}px`,
    "--a11y-button-padding": `${t * 0.75}px`,
    "--a11y-button-radius": c,
    "--a11y-button-bg": "#ffffff",
    "--a11y-button-color": "#000000",
    "--a11y-button-border-color": "#000000",
    "--a11y-button-hover-bg": "#000000",
    "--a11y-button-hover-color": "#ffffff",
    "--a11y-button-focus-ring-color": "rgba(0, 0, 0, 0.4)",
    "--a11y-button-icon-size": `${t * 1.5}px`
  };
  return /* @__PURE__ */ i(
    "button",
    {
      className: Q["a11y-button-trigger"],
      style: p,
      onClick: n,
      "aria-label": g("{{hideShow}} Accessibility Settings", {
        hideShow: g(e ? "Hide" : "Show")
      }),
      children: y || /* @__PURE__ */ i(k, { className: Q["a11y-button-icon"] })
    }
  );
}
const O = {
  "a11y-button-toolbar": "AccessibilityToolbar-module__a11y-button-toolbar___Z5qrw",
  "a11y-button-toolbar-header": "AccessibilityToolbar-module__a11y-button-toolbar-header___-esW-",
  "a11y-button-toolbar-main": "AccessibilityToolbar-module__a11y-button-toolbar-main___VGXsy",
  "a11y-button-toolbar-title": "AccessibilityToolbar-module__a11y-button-toolbar-title___jpQy6",
  "a11y-button-toolbar-controls": "AccessibilityToolbar-module__a11y-button-toolbar-controls___cSaiR",
  "a11y-button-toolbar-advanced": "AccessibilityToolbar-module__a11y-button-toolbar-advanced___1g4yG"
};
function rt({
  props: e,
  portalContainer: n
}) {
  const [t, a] = C(!1), [r, l] = C(!1), {
    visibleSettings: o,
    language: s,
    isEnabled: c,
    hasChanges: u,
    updateSettings: y,
    setEnabled: m,
    resetSettings: k,
    setProfile: g,
    commitChanges: p,
    rollbackChanges: x,
    t: b,
    fontOptions: w
  } = N();
  ot(o, w[0], c);
  const z = () => {
    u && (window.confirm(
      b("You have unsaved changes. Would you like to save them before closing?")
    ) ? p() : x()), a(!1);
  }, E = () => {
    p(), a(!1);
  }, R = {
    "--a11y-toolbar-gap": `${o.fontSize}px`,
    "--a11y-toolbar-padding": `${o.fontSize * 0.75}px`,
    "--a11y-toolbar-title-size": `${o.fontSize * 1.25}px`,
    "--a11y-toolbar-controls-gap": `${o.fontSize * 0.75}px`,
    "--a11y-toolbar-controls-margin": `${o.fontSize * 0.25}px 0`,
    "--a11y-toolbar-advanced-padding": `${o.fontSize}px`
  }, h = t && n ? /* @__PURE__ */ d("div", { className: O["a11y-button-toolbar"], style: R, children: [
    /* @__PURE__ */ d("div", { className: O["a11y-button-toolbar-header"], children: [
      /* @__PURE__ */ d("div", { className: O["a11y-button-toolbar-main"], children: [
        /* @__PURE__ */ i("h2", { className: O["a11y-button-toolbar-title"], children: b("Accessibility") }),
        /* @__PURE__ */ i(
          nt,
          {
            checked: c,
            onChange: m,
            size: o.fontSize * 1.5
          }
        ),
        c && /* @__PURE__ */ d(F, { children: [
          /* @__PURE__ */ i(
            at,
            {
              currentProfile: o.currentProfile,
              onChange: g,
              disabled: !1,
              fontSize: o.fontSize
            }
          ),
          /* @__PURE__ */ i(
            et,
            {
              settings: o,
              onSettingsChange: y,
              disabled: r
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: O["a11y-button-toolbar-controls"], children: [
        c && u && /* @__PURE__ */ d(F, { children: [
          /* @__PURE__ */ i(
            W,
            {
              variant: "primary",
              icon: /* @__PURE__ */ i(Ne, { size: o.fontSize }),
              onClick: E,
              fontSize: o.fontSize,
              children: b("Save Changes")
            }
          ),
          /* @__PURE__ */ i(
            W,
            {
              variant: "ghost",
              icon: /* @__PURE__ */ i(ne, { size: o.fontSize }),
              onClick: x,
              fontSize: o.fontSize,
              children: b("Revert")
            }
          )
        ] }),
        c && /* @__PURE__ */ i(
          W,
          {
            variant: "secondary",
            icon: /* @__PURE__ */ i(Re, { size: o.fontSize }),
            onClick: () => l(!r),
            fontSize: o.fontSize,
            children: b(r ? "Less Options" : "More Options")
          }
        ),
        /* @__PURE__ */ i(
          "select",
          {
            value: s,
            onChange: (f) => y({ language: f.target.value }),
            style: {
              padding: `${o.fontSize * 0.25}px ${o.fontSize * 0.5}px`,
              fontSize: `${o.fontSize}px`,
              height: `${o.fontSize * 2}px`,
              borderRadius: "4px",
              border: "2px solid currentColor"
            },
            "aria-label": b("language"),
            children: Object.entries(Fe).map(([f, ue]) => /* @__PURE__ */ i("option", { value: f, children: ue }, f))
          }
        ),
        /* @__PURE__ */ i(
          $,
          {
            icon: /* @__PURE__ */ i(ie, { size: o.fontSize }),
            label: "Close",
            onClick: z,
            variant: "danger",
            size: o.fontSize * 1.2
          }
        )
      ] })
    ] }),
    r && c && /* @__PURE__ */ i("div", { className: O["a11y-button-toolbar-advanced"], children: /* @__PURE__ */ i(
      Qe,
      {
        settings: o,
        updateSettings: y,
        resetSettings: k
      }
    ) })
  ] }) : null;
  return /* @__PURE__ */ d(F, { children: [
    e.children ? /* @__PURE__ */ i("div", { onClick: () => a(!t), children: e.children }) : /* @__PURE__ */ i(
      lt,
      {
        isOpen: t,
        onClick: () => a(!t),
        fontSize: o.fontSize,
        position: e.position,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        borderRadius: e.borderRadius,
        iconHandle: e.iconHandle,
        hideWhenOpen: e.hideButtonWhenOpen
      }
    ),
    n && Y(h, n),
    n && Y(
      /* @__PURE__ */ i(Ke, { isEnabled: c && o.showReadingMask }),
      n
    )
  ] });
}
function bt(e) {
  const [n, t] = C(null);
  return P(() => {
    const a = document.createElement("div");
    return a.id = "accessibility-toolbar-root", a.style.position = "static", a.style.width = "100%", document.body.firstChild ? document.body.insertBefore(a, document.body.firstChild) : document.body.appendChild(a), t(a), () => {
      document.body.contains(a) && document.body.removeChild(a);
    };
  }, []), /* @__PURE__ */ i(rt, { props: e, portalContainer: n });
}
export {
  dt as AccessibilityProvider,
  bt as AccessibilityToolbar
};
