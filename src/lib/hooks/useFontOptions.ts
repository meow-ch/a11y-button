import { useEffect, useState } from "react";
import { FONT_OPTIONS } from "../types";

const useFontOptions = () => {
  const [fontOptions, setFontOptions] = useState<typeof FONT_OPTIONS>(FONT_OPTIONS);

  useEffect(() => {
    if (fontOptions[0].value !== '') return;
    // Save settings whenever they are committed (saved)
    const bodyFont = window.getComputedStyle(document.body).fontFamily;
    setFontOptions(prev => {
      const [defaultFontOption, ...rest] = prev;
      return [{ ...defaultFontOption, value: bodyFont }, ...rest];
    });
  }, [fontOptions]);

  return fontOptions;
};

export default useFontOptions;