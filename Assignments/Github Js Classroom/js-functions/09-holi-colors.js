/**
 * 🎨 Holi Color Mixer - Pure Functions
 *
 * Holi ka festival hai! Rang mix karne hain. Lekin PURE FUNCTIONS use
 * karne hain — matlab:
 *   1. Input ko KABHI modify mat karo (no mutation)
 *   2. Same input pe HAMESHA same output aaye
 *   3. Koi side effects nahi (no console.log, no external state changes)
 *
 * Har color object: { name: string, r: number, g: number, b: number }
 *   where r, g, b are 0-255 (RGB values)
 *
 * Functions:
 *
 *   1. mixColors(color1, color2)
 *      - Mix two colors by averaging their RGB values
 *      - New name: `${color1.name}-${color2.name}`
 *      - Round RGB values to integers
 *      - MUST NOT modify color1 or color2
 *      - Agar either color null/invalid, return null
 *
 *   2. adjustBrightness(color, factor)
 *      - Multiply each RGB by factor, clamp to 0-255 range
 *      - Round to integers using Math.round
 *      - Name stays same
 *      - MUST NOT modify original color
 *      - Agar color null or factor not number, return null
 *
 *   3. addToPalette(palette, color)
 *      - Return NEW array with color added at end
 *      - MUST NOT modify original palette array
 *      - Agar palette not array, return [color]
 *      - Agar color null/invalid, return copy of palette
 *
 *   4. removeFromPalette(palette, colorName)
 *      - Return NEW array without the color with that name
 *      - MUST NOT modify original palette
 *      - Agar palette not array, return []
 *
 *   5. mergePalettes(palette1, palette2)
 *      - Merge two palettes into NEW array
 *      - No duplicate names (keep first occurrence)
 *      - MUST NOT modify either original palette
 *      - Agar either not array, treat as empty array
 *
 * Hint: Use spread operator [...arr], Object spread {...obj} to create
 *   copies. NEVER use push, splice, or direct property assignment on inputs.
 *
 * @example
 *   const red = { name: "red", r: 255, g: 0, b: 0 };
 *   const blue = { name: "blue", r: 0, g: 0, b: 255 };
 *   mixColors(red, blue)
 *   // => { name: "red-blue", r: 128, g: 0, b: 128 }
 *   // red and blue objects are UNCHANGED
 */
export function mixColors(color1, color2) {
  // Your code here
  if (!color1 || !color2) return null;

  const { name: name1, r: r1, g: g1, b: b1 } = color1;
  const { name: name2, r: r2, g: g2, b: b2 } = color2;

  if (typeof name1 !== "string" || typeof name2 !== "string") return null;

  if (
    [r1, g1, b1, r2, g2, b2].some(
      (c) => typeof c !== "number" || c < 0 || c > 255,
    )
  )
    return null;

  const mixedColor = {
    name: `${name1}-${name2}`,
    r: Math.round((r1 + r2) / 2),
    g: Math.round((g1 + g2) / 2),
    b: Math.round((b1 + b2) / 2),
  };
  return mixedColor;
}

export function adjustBrightness(color, factor) {
  // Your code here
  if (!color || typeof factor !== "number") return null;

  const { name, r, g, b } = color;

  if (typeof name !== "string") return null;
  if ([r, g, b].some((c) => typeof c !== "number" || c < 0 || c > 255))
    return null;

  const adjustedColor = {
    name,
    r: Math.round(Math.min(255, Math.max(0, r * factor))),
    g: Math.round(Math.min(255, Math.max(0, g * factor))),
    b: Math.round(Math.min(255, Math.max(0, b * factor))),
  };
  return adjustedColor;
}

export function addToPalette(palette, color) {
  // Your code here
  if (!Array.isArray(palette)) return [color];
  if (!color || typeof color.name !== "string") return [...palette];

  return [...palette, color];
}

export function removeFromPalette(palette, colorName) {
  // Your code here
  if (!Array.isArray(palette)) return [];
  if (typeof colorName !== "string") return [...palette];

  return palette.filter((color) => color.name !== colorName);
}

export function mergePalettes(palette1, palette2) {
  // Your code here
   if (!Array.isArray(palette1)) palette1 = [];
  if (!Array.isArray(palette2)) palette2 = [];

  const merged = [...palette1];
  palette2.forEach((color) => {
    if (!merged.some((c) => c.name === color.name)) {
      merged.push(color);
    }
  });
  return merged;
}
