// BFS pathfinding on a grid for Snake AI

export function bfs(start, target, snakeBody, tileCount) {
  const queue = [];
  const visited = new Set();
  const parent = new Map();

  const key = (x, y) => `${x},${y}`;

  // Snake body cells are treated as obstacles
  const blocked = new Set(snakeBody.map(p => key(p.x, p.y)));

  queue.push(start);
  visited.add(key(start.x, start.y));

  const directions = [
    { x: 0, y: -1 }, // up
    { x: 0, y: 1 },  // down
    { x: -1, y: 0 }, // left
    { x: 1, y: 0 }   // right
  ];

  while (queue.length > 0) {
    const current = queue.shift();

    // Target reached
    if (current.x === target.x && current.y === target.y) {
      return reconstructPath(parent, start, target);
    }

    for (const d of directions) {
      const nx = current.x + d.x;
      const ny = current.y + d.y;
      const k = key(nx, ny);

      // Boundary check
      if (nx < 0 || ny < 0 || nx >= tileCount || ny >= tileCount) continue;

      // Obstacle / visited check
      if (visited.has(k) || blocked.has(k)) continue;

      visited.add(k);
      parent.set(k, current);
      queue.push({ x: nx, y: ny });
    }
  }

  // No path found
  return null;
}

function reconstructPath(parent, start, target) {
  const path = [];
  let curr = target;
  const key = (x, y) => `${x},${y}`;

  while (!(curr.x === start.x && curr.y === start.y)) {
    path.push(curr);
    curr = parent.get(key(curr.x, curr.y));
    if (!curr) return null;
  }

  path.reverse(); // from start → target
  return path;
}
