// Per-breakpoint positions (%) measured from each background image
// mobile: 1152×2048 (9:16), tablet: 1024×1024 (1:1), desktop: 2048×1152 (16:9)

const houses = [
  {
    id: "terraria",
    name: "Terraria",
    image: "house1.png",
    mobile: { x: 9, y: 23, width: 25, height: 12 },
    tablet: { x: 7, y: 2, width: 29, height: 27 },
    desktop: { x: 29, y: 5, width: 14, height: 26 },
    popupContent: {
      title: "🏡 Terraria",
      subtitle: "Ceremonia",
      body: "Placeholder: información sobre la ceremonia de boda.",
    },
  },
  {
    id: "mario",
    name: "Mario Bros",
    image: "house2.png",
    mobile: { x: 35, y: 26, width: 24, height: 14 },
    tablet: { x: 37, y: 6, width: 29, height: 27 },
    desktop: { x: 44, y: 8, width: 13, height: 24 },
    popupContent: {
      title: "🍄 Mario Bros",
      subtitle: "Banquete",
      body: "Placeholder: información sobre el menú y el banquete.",
    },
  },
  {
    id: "gravity-falls",
    name: "Mystery Shack",
    image: "house3.png",
    mobile: { x: 66, y: 26, width: 25, height: 12 },
    tablet: { x: 67, y: 4, width: 29, height: 27 },
    desktop: { x: 61, y: 5, width: 14, height: 26 },
    popupContent: {
      title: "🔮 Gravity Falls",
      subtitle: "Alojamiento",
      body: "Placeholder: información sobre el alojamiento.",
    },
  },
  {
    id: "unravel",
    name: "Unravel Two",
    image: "house4.png",
    mobile: { x: 14, y: 43, width: 28, height: 14 },
    tablet: { x: 15, y: 37, width: 29, height: 27 },
    desktop: { x: 31, y: 37, width: 16, height: 28 },
    popupContent: {
      title: "🧶 Unravel Two",
      subtitle: "Dress Code",
      body: "Placeholder: información sobre el código de vestimenta.",
    },
  },
  {
    id: "it-takes-two",
    name: "It Takes Two",
    image: "house5.png",
    mobile: { x: 53, y: 42, width: 28, height: 14 },
    tablet: { x: 58, y: 33, width: 29, height: 27 },
    desktop: { x: 55, y: 33, width: 16, height: 28 },
    popupContent: {
      title: "🎮 It Takes Two",
      subtitle: "Regalos",
      body: "Placeholder: información sobre la lista de regalos.",
    },
  },
  {
    id: "borderlands",
    name: "Borderlands",
    image: "house6.png",
    mobile: { x: 15, y: 58, width: 25, height: 14 },
    tablet: { x: 17, y: 67, width: 29, height: 27 },
    desktop: { x: 32, y: 65, width: 14, height: 28 },
    popupContent: {
      title: "💥 Borderlands",
      subtitle: "Transporte",
      body: "Placeholder: información sobre cómo llegar y transporte.",
    },
  },
  {
    id: "portal",
    name: "Portal",
    image: "house7.png",
    mobile: { x: 43, y: 57, width: 32, height: 14 },
    tablet: { x: 52, y: 60, width: 29, height: 27 },
    desktop: { x: 50, y: 59, width: 18, height: 28 },
    popupContent: {
      title: "🌀 Portal",
      subtitle: "Confirmación",
      body: "Placeholder: confirma tu asistencia aquí.",
    },
  },
];

export default houses;
