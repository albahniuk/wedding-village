import React from 'react';
import './Cat.css';

// Sprite sheet layout: 4 rows (down, left, front, back) x 3 columns
// We map movement direction to sprite row
const DIRECTION_ROW = {
  down: 0,
  left: 1,
  front: 2,  // toward camera
  back: 3,   // away from camera
};

function getDirection(dx, dy) {
  // Determine primary direction from movement delta
  if (Math.abs(dx) > Math.abs(dy)) {
    return dx < 0 ? 'left' : 'left'; // sprite faces left; we flip for right
  }
  return dy < 0 ? 'back' : 'down';
}

function Cat({ x, y, direction, isWalking, frame }) {
  const dir = direction || 'down';
  const row = DIRECTION_ROW[dir] || 0;
  const col = isWalking ? (frame % 3) : 1; // middle frame when idle
  const facingRight = direction === 'right';

  const spriteStyle = {
    left: `${x}%`,
    top: `${y}%`,
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/cat-sprite.png)`,
    backgroundPosition: `-${col * 32}px -${row * 32}px`,
    transform: facingRight ? 'scaleX(-1)' : 'none',
  };

  return (
    <div
      className={`cat ${isWalking ? 'cat--walking' : ''}`}
      style={spriteStyle}
    />
  );
}

export { getDirection };
export default Cat;
