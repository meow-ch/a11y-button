import { useEffect, useState } from "react";
import { fontFamilyOptions } from "../types";

const useFontOptions = () => {
  const [fontOptions, setFontOptions] = useState<typeof fontFamilyOptions>(fontFamilyOptions);

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