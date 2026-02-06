// Decorative elements placed near their corresponding game houses
// Same coordinate system as houses: percentages within the village__layer

const decorations = [
  // --- Terraria house ---
  {
    id: "terraria-1",
    image: "terraria-1.png",
    alt: "Terraria chest",
    mobile: { x: 17, y: 32, width: 8, height: 4 },
    tablet: { x: 17, y: 32, width: 8, height: 4 },
    desktop: { x: 36, y: 21, width: 4, height: 9 },
  },
  {
    id: "terraria-2",
    image: "terraria-2.png",
    alt: "Terraria altar",
    mobile: { x: 9, y: 35, width: 7, height: 3 },
    tablet: { x: 9, y: 35, width: 7, height: 3 },
    desktop: { x: 26, y: 18, width: 5, height: 8 },
  },

  // --- Mario house ---
  {
    id: "mario-1",
    image: "mario-1.png",
    alt: "Question block",
    mobile: { x: 54, y: 34, width: 5, height: 3 },
    tablet: { x: 54, y: 34, width: 5, height: 3 },
    desktop: { x: 54, y: 22, width: 3, height: 6 },
  },
  {
    id: "mario-2",
    image: "mario-2.png",
    alt: "Mushroom",
    mobile: { x: 36, y: 37, width: 5, height: 3 },
    tablet: { x: 36, y: 37, width: 5, height: 3 },
    desktop: { x: 44, y: 25, width: 3, height: 5 },
  },

  // --- Gravity Falls house ---
  {
    id: "gravity-falls",
    image: "gravity-falls.png",
    alt: "Gravity Falls characters",
    mobile: { x: 77, y: 35, width: 14, height: 6 },
    tablet: { x: 77, y: 35, width: 14, height: 6 },
    desktop: { x: 67, y: 23, width: 11, height: 13 },
  },

  // --- Unravel house ---
  {
    id: "unravel",
    image: "unravel.png",
    alt: "Yarny characters",
    mobile: { x: 37, y: 47, width: 11, height: 4 },
    tablet: { x: 37, y: 47, width: 11, height: 4 },
    desktop: { x: 43, y: 47, width: 9, height: 5 },
  },

  // --- It takes two house ---
  {
    id: "it-takes-two",
    image: "it-takes-two.png",
    alt: "Cubes from It Takes Two",
    mobile: { x: 74, y: 55, width: 11, height: 4 },
    tablet: { x: 74, y: 55, width: 11, height: 4 },
    desktop: { x: 51, y: 40, width: 9, height: 7 },
  },

  // --- Borderlands house ---
  {
    id: "borderlands-1",
    image: "borderlands-1.png",
    alt: "Vault hunter",
    mobile: { x: 12, y: 63, width: 7, height: 5 },
    tablet: { x: 12, y: 63, width: 7, height: 5 },
    desktop: { x: 29, y: 77, width: 6, height: 10 },
  },
  {
    id: "borderlands-2",
    image: "borderlands-2.png",
    alt: "Claptrap",
    mobile: { x: 39, y: 66, width: 6, height: 4 },
    tablet: { x: 39, y: 66, width: 6, height: 4 },
    desktop: { x: 45, y: 80, width: 5, height: 10 },
  },

  // --- Portal house ---
  {
    id: "portal",
    image: "portal.png",
    alt: "Companion cube",
    mobile: { x: 64, y: 73, width: 6, height: 4 },
    tablet: { x: 64, y: 73, width: 6, height: 4 },
    desktop: { x: 61, y: 79, width: 5, height: 5 },
  },
];

export default decorations;
