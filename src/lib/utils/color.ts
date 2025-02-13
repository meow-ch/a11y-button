export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const getRGB = (hex: string): [number, number, number] => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };

  const [r1, g1, b1] = getRGB(color1);
  const [r2, g2, b2] = getRGB(color2);

  const l1 = getLuminance(r1, g1, b1);
  const l2 = getLuminance(r2, g2, b2);

  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  return ratio;
}

export async function validateColorContrast(
  bgColor: string,
  fgColor: string
): Promise<boolean> {
  const contrast = getContrastRatio(bgColor, fgColor);
  
  if (contrast < 4.5) {
    const proceed = window.confirm(
      `Warning: The selected colors have low contrast (${contrast.toFixed(2)}:1).\n\n` +
      'WCAG guidelines recommend a minimum contrast ratio of 4.5:1 for better readability.\n\n' +
      'Do you want to proceed with these colors anyway?'
    );
    return proceed;
  }
  
  return true;
}
