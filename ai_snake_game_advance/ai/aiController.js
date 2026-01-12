// Controls snake movement using BFS

import { bfs } from "./bfs.js";

export function getAIMove(snake, food, tileCount) {
  const head = snake.body[0];

  const path = bfs(
    { x: head.x, y: head.y },
    { x: food.x, y: food.y },
    snake.body,
    tileCount
  );

  // If no path found, keep moving forward (safe fallback)
  if (!path || path.length === 0) {
    return { dx: snake.dx, dy: snake.dy };
  }

  const next = path[0];

  return {
    dx: next.x - head.x,
    dy: next.y - head.y
  };
}
