// Common helper functions

/**
 * Generate a random integer between 0 and max - 1
 */
export function randomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Compare two grid positions
 */
export function isSamePosition(a, b) {
  return a.x === b.x && a.y === b.y;
}

/**
 * Check if a position is inside the grid
 */
export function isInsideGrid(x, y, tileCount) {
  return x >= 0 && y >= 0 && x < tileCount && y < tileCount;
}

/**
 * Convert grid position to string key
 */
export function positionKey(x, y) {
  return `${x},${y}`;
}

/**
 * Delay helper (useful for animations / debugging)
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
