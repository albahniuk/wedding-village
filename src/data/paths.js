// Per-breakpoint waypoints between connected houses, following the dirt roads.
// mobile: 1152×2048 (9:16), tablet: 1024×1024 (1:1), desktop: 2048×1152 (16:9)

const segmentsByBreakpoint = {
  mobile: {
    // Row 1: terraria, mario, gravity-falls (top row)
    "terraria->mario": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 28 },
    ],
    "terraria->gravity-falls": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 28 },
      { x: 40, y: 27 },
      { x: 50, y: 26 },
      { x: 58, y: 27 },
    ],
    "terraria->unravel": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
    ],
    "terraria->it-takes-two": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 40 },
    ],
    "terraria->borderlands": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
      { x: 22, y: 46 },
      { x: 20, y: 52 },
    ],
    "terraria->portal": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 42 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    "mario->gravity-falls": [
      { x: 50, y: 26 },
      { x: 58, y: 27 },
    ],
    "mario->unravel": [
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
    ],
    "mario->it-takes-two": [
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 40 },
    ],
    "mario->borderlands": [
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
      { x: 22, y: 46 },
      { x: 20, y: 52 },
    ],
    "mario->portal": [
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 42 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    "gravity-falls->unravel": [
      { x: 58, y: 27 },
      { x: 50, y: 26 },
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
    ],
    "gravity-falls->it-takes-two": [
      { x: 58, y: 27 },
      { x: 50, y: 26 },
      { x: 40, y: 27 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 40 },
    ],
    "gravity-falls->borderlands": [
      { x: 58, y: 27 },
      { x: 50, y: 26 },
      { x: 40, y: 27 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
      { x: 22, y: 46 },
      { x: 20, y: 52 },
    ],
    "gravity-falls->portal": [
      { x: 58, y: 27 },
      { x: 50, y: 26 },
      { x: 40, y: 27 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 42 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    // Row 2: unravel, it-takes-two (middle row)
    "unravel->it-takes-two": [
      { x: 30, y: 45 },
      { x: 35, y: 42 },
      { x: 42, y: 40 },
      { x: 50, y: 42 },
    ],
    "unravel->borderlands": [
      { x: 22, y: 46 },
      { x: 20, y: 52 },
    ],
    "unravel->portal": [
      { x: 30, y: 45 },
      { x: 35, y: 42 },
      { x: 42, y: 40 },
      { x: 50, y: 42 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    "it-takes-two->borderlands": [
      { x: 50, y: 40 },
      { x: 42, y: 40 },
      { x: 35, y: 42 },
      { x: 30, y: 45 },
      { x: 25, y: 48 },
      { x: 22, y: 52 },
    ],
    "it-takes-two->portal": [
      { x: 50, y: 40 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    // Row 3: borderlands, portal (bottom row)
    "borderlands->portal": [
      { x: 25, y: 58 },
      { x: 32, y: 56 },
      { x: 40, y: 55 },
    ],
  },
  tablet: {
    // Same as mobile (using mobile background)
    "terraria->mario": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 28 },
    ],
    "terraria->gravity-falls": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 28 },
      { x: 40, y: 27 },
      { x: 50, y: 26 },
      { x: 58, y: 27 },
    ],
    "terraria->unravel": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
    ],
    "terraria->it-takes-two": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 40 },
    ],
    "terraria->borderlands": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
      { x: 22, y: 46 },
      { x: 20, y: 52 },
    ],
    "terraria->portal": [
      { x: 22, y: 27 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 42 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    "mario->gravity-falls": [
      { x: 50, y: 26 },
      { x: 58, y: 27 },
    ],
    "mario->unravel": [
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 28, y: 29 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
    ],
    "mario->it-takes-two": [
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 40 },
    ],
    "mario->borderlands": [
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
      { x: 22, y: 46 },
      { x: 20, y: 52 },
    ],
    "mario->portal": [
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 42 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    "gravity-falls->unravel": [
      { x: 58, y: 27 },
      { x: 50, y: 26 },
      { x: 40, y: 27 },
      { x: 33, y: 28 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
    ],
    "gravity-falls->it-takes-two": [
      { x: 58, y: 27 },
      { x: 50, y: 26 },
      { x: 40, y: 27 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 40 },
    ],
    "gravity-falls->borderlands": [
      { x: 58, y: 27 },
      { x: 50, y: 26 },
      { x: 40, y: 27 },
      { x: 33, y: 32 },
      { x: 30, y: 36 },
      { x: 25, y: 40 },
      { x: 22, y: 46 },
      { x: 20, y: 52 },
    ],
    "gravity-falls->portal": [
      { x: 58, y: 27 },
      { x: 50, y: 26 },
      { x: 40, y: 27 },
      { x: 33, y: 32 },
      { x: 38, y: 35 },
      { x: 44, y: 38 },
      { x: 50, y: 42 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    "unravel->it-takes-two": [
      { x: 30, y: 45 },
      { x: 35, y: 42 },
      { x: 42, y: 40 },
      { x: 50, y: 42 },
    ],
    "unravel->borderlands": [
      { x: 22, y: 46 },
      { x: 20, y: 52 },
    ],
    "unravel->portal": [
      { x: 30, y: 45 },
      { x: 35, y: 42 },
      { x: 42, y: 40 },
      { x: 50, y: 42 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    "it-takes-two->borderlands": [
      { x: 50, y: 40 },
      { x: 42, y: 40 },
      { x: 35, y: 42 },
      { x: 30, y: 45 },
      { x: 25, y: 48 },
      { x: 22, y: 52 },
    ],
    "it-takes-two->portal": [
      { x: 50, y: 40 },
      { x: 52, y: 48 },
      { x: 50, y: 54 },
    ],
    "borderlands->portal": [
      { x: 25, y: 58 },
      { x: 32, y: 56 },
      { x: 40, y: 55 },
    ],
  },
  desktop: {
    "terraria->mario": [
      { x: 31, y: 24 },
      { x: 39, y: 30 },
      { x: 39, y: 33 },
      { x: 47, y: 34 },
      { x: 52, y: 28 },
    ],
    "terraria->unravel": [
      { x: 31, y: 24 },
      { x: 39, y: 30 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 27, y: 50 },
      { x: 34, y: 60 },
    ],
    "terraria->gravity-falls": [
      { x: 31, y: 24 },
      { x: 39, y: 30 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 27, y: 48 },
      { x: 27, y: 50 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 51, y: 53 },
      { x: 51, y: 46 },
      { x: 50, y: 42 },
      { x: 58, y: 32 },
      { x: 63, y: 29 },
      { x: 63, y: 26 },
    ],
    "terraria->it-takes-two": [
      { x: 31, y: 24 },
      { x: 39, y: 30 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 27, y: 48 },
      { x: 27, y: 50 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 51, y: 53 },
      { x: 51, y: 46 },
      { x: 50, y: 42 },
      { x: 58, y: 32 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 38 },
      { x: 71, y: 44 },
      { x: 73, y: 50 },
      { x: 64, y: 63 },
      { x: 61, y: 63 },
      { x: 57, y: 57 },
    ],
    "terraria->portal": [
      { x: 31, y: 24 },
      { x: 39, y: 30 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 27, y: 48 },
      { x: 27, y: 50 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 51, y: 53 },
      { x: 51, y: 46 },
      { x: 50, y: 42 },
      { x: 58, y: 32 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 38 },
      { x: 71, y: 44 },
      { x: 73, y: 50 },
      { x: 64, y: 63 },
      { x: 61, y: 63 },
      { x: 57, y: 57 },
      { x: 52, y: 62 },
      { x: 52, y: 64 },
      { x: 54, y: 69 },
    ],
    "terraria->borderlands": [
      { x: 31, y: 24 },
      { x: 39, y: 30 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 27, y: 48 },
      { x: 27, y: 50 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 51, y: 53 },
      { x: 51, y: 46 },
      { x: 50, y: 42 },
      { x: 58, y: 32 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 38 },
      { x: 71, y: 44 },
      { x: 73, y: 50 },
      { x: 64, y: 63 },
      { x: 61, y: 63 },
      { x: 57, y: 57 },
      { x: 52, y: 62 },
      { x: 52, y: 64 },
      { x: 54, y: 69 },
      { x: 53, y: 70 },
      { x: 44, y: 82 },
    ],
    "mario->gravity-falls": [
      { x: 52, y: 28 },
      { x: 47, y: 35 },
      { x: 42, y: 35 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 28, y: 52 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 44, y: 66 },
      { x: 51, y: 55 },
      { x: 52, y: 53 },
      { x: 52, y: 48 },
      { x: 51, y: 41 },
      { x: 59, y: 31 },
      { x: 63, y: 29 },
      { x: 63, y: 26 },
    ],
    "mario->unravel": [
      { x: 52, y: 28 },
      { x: 47, y: 35 },
      { x: 42, y: 35 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 28, y: 52 },
      { x: 34, y: 60 },
    ],
    "mario->it-takes-two": [
      { x: 52, y: 28 },
      { x: 47, y: 35 },
      { x: 42, y: 35 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 28, y: 52 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 44, y: 66 },
      { x: 51, y: 55 },
      { x: 52, y: 53 },
      { x: 52, y: 48 },
      { x: 51, y: 41 },
      { x: 59, y: 31 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
    ],
    "mario->borderlands": [
      { x: 52, y: 28 },
      { x: 47, y: 35 },
      { x: 42, y: 35 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 28, y: 52 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 44, y: 66 },
      { x: 51, y: 55 },
      { x: 52, y: 53 },
      { x: 52, y: 48 },
      { x: 51, y: 41 },
      { x: 59, y: 31 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
      { x: 44, y: 82 },
    ],
    "mario->portal": [
      { x: 52, y: 28 },
      { x: 47, y: 35 },
      { x: 42, y: 35 },
      { x: 39, y: 33 },
      { x: 28, y: 46 },
      { x: 28, y: 52 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 44, y: 66 },
      { x: 51, y: 55 },
      { x: 52, y: 53 },
      { x: 52, y: 48 },
      { x: 51, y: 41 },
      { x: 59, y: 31 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
    ],
    "gravity-falls->unravel": [
      { x: 63, y: 26 },
      { x: 63, y: 29 },
      { x: 58, y: 32 },
      { x: 50, y: 42 },
      { x: 51, y: 46 },
      { x: 51, y: 53 },
      { x: 44, y: 64 },
      { x: 39, y: 64 },
      { x: 34, y: 60 },
    ],
    "gravity-falls->it-takes-two": [
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
    ],
    "gravity-falls->borderlands": [
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
      { x: 44, y: 82 },
    ],
    "gravity-falls->portal": [
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
    ],
    "unravel->it-takes-two": [
      { x: 34, y: 60 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 51, y: 53 },
      { x: 51, y: 46 },
      { x: 50, y: 42 },
      { x: 58, y: 32 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
    ],
    "unravel->borderlands": [
      { x: 34, y: 60 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 51, y: 53 },
      { x: 51, y: 46 },
      { x: 50, y: 42 },
      { x: 58, y: 32 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
      { x: 44, y: 82 },
    ],
    "unravel->portal": [
      { x: 34, y: 60 },
      { x: 39, y: 64 },
      { x: 44, y: 64 },
      { x: 51, y: 53 },
      { x: 51, y: 46 },
      { x: 50, y: 42 },
      { x: 58, y: 32 },
      { x: 63, y: 29 },
      { x: 70, y: 35 },
      { x: 71, y: 36 },
      { x: 71, y: 44 },
      { x: 73, y: 49 },
      { x: 72, y: 52 },
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
    ],
    "it-takes-two->borderlands": [
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
      { x: 44, y: 82 },
    ],
    "it-takes-two->portal": [
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
    ],
    "borderlands->portal": [
      { x: 44, y: 82 },
      { x: 53, y: 70 },
    ],
  },
};

// Build reverse segments for each breakpoint
function buildAllSegments(segs) {
  const all = { ...segs };
  Object.entries(segs).forEach(([key, waypoints]) => {
    const [from, to] = key.split("->");
    all[`${to}->${from}`] = [...waypoints].reverse();
  });
  return all;
}

const allSegmentsByBreakpoint = {
  mobile: buildAllSegments(segmentsByBreakpoint.mobile),
  tablet: buildAllSegments(segmentsByBreakpoint.tablet),
  desktop: buildAllSegments(segmentsByBreakpoint.desktop),
};

// Adjacency graph for BFS (same for all breakpoints)
const adjacency = {
  terraria: ["mario", "unravel"],
  mario: ["terraria", "gravity-falls"],
  "gravity-falls": ["mario"],
  unravel: ["terraria", "it-takes-two", "borderlands"],
  "it-takes-two": ["unravel", "portal"],
  borderlands: ["unravel", "portal"],
  portal: ["it-takes-two", "borderlands"],
};

function findPath(fromId, toId) {
  if (fromId === toId) return [];
  const queue = [[fromId]];
  const visited = new Set([fromId]);
  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];
    for (const neighbor of adjacency[current] || []) {
      if (neighbor === toId) return [...path, neighbor];
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return [];
}

// Get all waypoints for traveling between houses at a given breakpoint
// The cat starts and ends at the first/last waypoint of the path (on the road),
// not at the house center, so it doesn't overlap the houses.
export function getWaypoints(fromId, toId, _houses, breakpoint) {
  if (fromId === toId) return [];

  const allSegments =
    allSegmentsByBreakpoint[breakpoint] || allSegmentsByBreakpoint.tablet;

  // Check for direct path first (used when all 21 combinations are defined)
  const directKey = `${fromId}->${toId}`;
  if (allSegments[directKey]) {
    // Return just the waypoints - first point is start, last point is end
    return [...allSegments[directKey]];
  }

  // Fallback to BFS for breakpoints with only adjacent segments
  const houseRoute = findPath(fromId, toId);
  if (houseRoute.length < 2) return [];

  const waypoints = [];
  for (let i = 0; i < houseRoute.length - 1; i++) {
    const segKey = `${houseRoute[i]}->${houseRoute[i + 1]}`;
    const seg = allSegments[segKey];
    if (seg) waypoints.push(...seg);
  }
  return waypoints;
}

// Get the road position near a house (first waypoint of any path starting from that house,
// or last waypoint of any path ending at that house)
// This is where the cat should be positioned when "at" a house
export function getRoadPosition(houseId, breakpoint) {
  const segments =
    segmentsByBreakpoint[breakpoint] || segmentsByBreakpoint.tablet;

  // First, try to find a path that starts from this house
  for (const key of Object.keys(segments)) {
    if (key.startsWith(`${houseId}->`)) {
      const waypoints = segments[key];
      if (waypoints && waypoints.length > 0) {
        return waypoints[0]; // First waypoint = road position near this house
      }
    }
  }

  // If no outgoing path found, find a path that ends at this house
  for (const key of Object.keys(segments)) {
    if (key.endsWith(`->${houseId}`)) {
      const waypoints = segments[key];
      if (waypoints && waypoints.length > 0) {
        return waypoints[waypoints.length - 1]; // Last waypoint = road position near this house
      }
    }
  }

  // Fallback: return a default position (shouldn't happen if paths are defined)
  return { x: 50, y: 50 };
}

export default allSegmentsByBreakpoint;
