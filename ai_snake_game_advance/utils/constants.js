// Game configuration constants

export const CANVAS_SIZE = 400;
export const GRID_SIZE = 20;
export const TILE_COUNT = CANVAS_SIZE / GRID_SIZE;

export const INITIAL_SNAKE_POSITION = { x: 10, y: 10 };

export const COLORS = {
  background: "#0f172a",
  snake: "#22c55e",
  food: "#ef4444",
  grid: "#020617"
};

export const DIRECTIONS = {
  UP: { dx: 0, dy: -1 },
  DOWN: { dx: 0, dy: 1 },
  LEFT: { dx: -1, dy: 0 },
  RIGHT: { dx: 1, dy: 0 }
};

export const GAME_SPEED = 120; // milliseconds
