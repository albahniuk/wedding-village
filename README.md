# Wedding Village

A pixel-art wedding invitation website built as an interactive village. Guests explore a retro videogame-themed map, click on themed houses to discover wedding details, and follow a little cat that walks between locations.

**Live site:** https://albahniuk.github.io/wedding-village

## Features

- **Interactive village map** with 7 clickable houses, each themed after a videogame (Terraria, Mario Bros, Gravity Falls, Unravel Two, It Takes Two, Borderlands, Portal)
- **Animated cat** that walks between houses along predefined paths using BFS pathfinding
- **Responsive design** with 3 breakpoints (mobile, tablet, desktop) and separate background images
- **Pixel-art decorations** placed around each house matching their game theme
- **Background music** (Stardew Valley) with a play/pause toggle
- **Pop-up panels** with wedding info: story, schedule, dress code, venue, accommodation, things to do, and RSVP
- **Countdown timer** to the wedding date
- **Easter egg** hidden in one of the decorations

## Tech stack

- React 19
- CSS with absolute percentage-based positioning over a `background-size: cover` layer
- Sprite-based cat animation with `requestAnimationFrame`
- Deployed on GitHub Pages via `gh-pages`

## Getting started

```bash
npm install
npm start
```

Open http://localhost:3000 to view it locally.

## Deployment

```bash
npm run deploy
```

This builds the project and publishes the `build` folder to the `gh-pages` branch.

## Project structure

```
src/
  components/
    Village.js / .css   Main container, background, music toggle
    Header.js / .css    Player avatars and countdown timer
    Cat.js / .css       Animated sprite cat
    Popup.js / .css     Modal with wedding information
  data/
    houses.js           House positions and popup content
    decorations.js      Decoration positions per breakpoint
    paths.js            Cat waypoints and pathfinding
  hooks/
    useBreakpoint.js    Responsive breakpoint detection
public/
  assets/               All images, sprites, backgrounds, and audio
```
