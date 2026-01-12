import { TILE_COUNT, GRID_SIZE } from "./grid.js";

export class Food {
  constructor() {
    this.spawn();
  }

  spawn() {
    this.x = Math.floor(Math.random() * TILE_COUNT);
    this.y = Math.floor(Math.random() * TILE_COUNT);
  }

  draw(ctx) {
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(
      this.x * GRID_SIZE,
      this.y * GRID_SIZE,
      GRID_SIZE,
      GRID_SIZE
    );
  }
}
