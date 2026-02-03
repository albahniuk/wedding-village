// Per-breakpoint waypoints between connected houses, following the dirt roads.
// mobile: 1152×2048 (9:16), tablet: 1024×1024 (1:1), desktop: 2048×1152 (16:9)

const segmentsByBreakpoint = {
  mobile: {
    "terraria->mario": [
      { x: 24, y: 15 },
      { x: 30, y: 14 },
      { x: 36, y: 12 },
    ],
    "mario->gravity-falls": [
      { x: 50, y: 12 },
      { x: 58, y: 13 },
      { x: 66, y: 12 },
    ],
    "terraria->unravel": [
      { x: 14, y: 16 },
      { x: 13, y: 19 },
      { x: 14, y: 22 },
    ],
    "unravel->it-takes-two": [
      { x: 32, y: 26 },
      { x: 40, y: 24 },
      { x: 50, y: 23 },
    ],
    "unravel->borderlands": [
      { x: 16, y: 30 },
      { x: 14, y: 33 },
      { x: 12, y: 37 },
    ],
    "it-takes-two->portal": [
      { x: 58, y: 28 },
      { x: 56, y: 31 },
      { x: 54, y: 35 },
    ],
    "borderlands->portal": [
      { x: 22, y: 44 },
      { x: 30, y: 43 },
      { x: 38, y: 42 },
      { x: 46, y: 40 },
    ],
  },
  tablet: {
    "terraria->mario": [
      { x: 22, y: 18 },
      { x: 27, y: 20 },
      { x: 32, y: 19 },
      { x: 37, y: 16 },
    ],
    "mario->gravity-falls": [
      { x: 48, y: 16 },
      { x: 54, y: 18 },
      { x: 60, y: 17 },
      { x: 67, y: 14 },
      { x: 73, y: 14 },
    ],
    "terraria->unravel": [
      { x: 16, y: 22 },
      { x: 15, y: 27 },
      { x: 16, y: 32 },
      { x: 18, y: 36 },
    ],
    "unravel->it-takes-two": [
      { x: 32, y: 44 },
      { x: 38, y: 42 },
      { x: 44, y: 40 },
      { x: 50, y: 38 },
      { x: 55, y: 36 },
    ],
    "unravel->borderlands": [
      { x: 18, y: 52 },
      { x: 16, y: 56 },
      { x: 14, y: 60 },
      { x: 14, y: 65 },
    ],
    "it-takes-two->portal": [
      { x: 60, y: 52 },
      { x: 58, y: 56 },
      { x: 58, y: 60 },
      { x: 60, y: 66 },
    ],
    "borderlands->portal": [
      { x: 22, y: 76 },
      { x: 28, y: 74 },
      { x: 34, y: 72 },
      { x: 40, y: 71 },
      { x: 46, y: 72 },
      { x: 52, y: 73 },
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
      { x: 59, y: 31 },
      { x: 51, y: 41 },
      { x: 52, y: 48 },
      { x: 52, y: 53 },
      { x: 51, y: 55 },
      { x: 44, y: 66 },
      { x: 44, y: 64 },
      { x: 39, y: 64 },
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
    "unravel->borderlands": [
      { x: 34, y: 60 },
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
    "unravel->portal": [
      { x: 34, y: 60 },
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
    "it-takes-two->borderlands": [
      { x: 64, y: 62 },
      { x: 60, y: 62 },
      { x: 57, y: 57 },
      { x: 53, y: 62 },
      { x: 53, y: 70 },
      { x: 44, y: 82 },
    ],
    "it-takes-two->portal": [
      { x: 64, y: 62 },
      { x: 60, y: 62 },
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
export function getWaypoints(fromId, toId, houses, breakpoint) {
  if (fromId === toId) return [];

  const allSegments =
    allSegmentsByBreakpoint[breakpoint] || allSegmentsByBreakpoint.tablet;

  const houseLookup = {};
  houses.forEach((h) => {
    const pos = h[breakpoint] || h.tablet;
    houseLookup[h.id] = { x: pos.x + pos.width / 2, y: pos.y + pos.height / 2 };
  });

  // Check for direct path first (used when all 21 combinations are defined, like desktop)
  const directKey = `${fromId}->${toId}`;
  if (allSegments[directKey]) {
    return [houseLookup[fromId], ...allSegments[directKey], houseLookup[toId]];
  }

  // Fallback to BFS for breakpoints with only adjacent segments (mobile/tablet)
  const houseRoute = findPath(fromId, toId);
  if (houseRoute.length < 2) return [];

  const waypoints = [houseLookup[houseRoute[0]]];
  for (let i = 0; i < houseRoute.length - 1; i++) {
    const segKey = `${houseRoute[i]}->${houseRoute[i + 1]}`;
    const seg = allSegments[segKey];
    if (seg) waypoints.push(...seg);
    waypoints.push(houseLookup[houseRoute[i + 1]]);
  }
  return waypoints;
}

export default allSegmentsByBreakpoint;
