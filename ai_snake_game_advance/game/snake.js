import { GRID_SIZE } from "./grid.js";

export class Snake {
  constructor() {
    this.body = [{ x: 10, y: 10 }];
    this.dx = 1;
    this.dy = 0;
  }

  move() {
    const head = {
      x: this.body[0].x + this.dx,
      y: this.body[0].y + this.dy
    };
    this.body.unshift(head);
    return head;
  }

  shrink() {
    this.body.pop();
  }

  grow() {
    // growth handled by not popping tail
  }

  draw(ctx) {
    ctx.fillStyle = "#22c55e";
    this.body.forEach(part => {
      ctx.fillRect(
        part.x * GRID_SIZE,
        part.y * GRID_SIZE,
        GRID_SIZE,
        GRID_SIZE
      );
    });
  }

  setDirection(dx, dy) {
    if (this.dx === -dx && this.dy === -dy) return;
    this.dx = dx;
    this.dy = dy;
  }

  isSelfCollision() {
    const [head, ...tail] = this.body;
    return tail.some(p => p.x === head.x && p.y === head.y);
  }
}
