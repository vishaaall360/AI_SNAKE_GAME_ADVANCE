import { getAIMove } from "./ai/aiController.js";
import { TILE_COUNT, drawGrid } from "./game/grid.js";
import { Snake } from "./game/snake.js";
import { Food } from "./game/food.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake;
let food;
let score = 0;
let mode = "Manual";
let running = false;
let timer = null;

document.addEventListener("keydown", e => {
  if (mode !== "Manual" || !running) return;

  if (e.key === "ArrowUp") snake.setDirection(0, -1);
  if (e.key === "ArrowDown") snake.setDirection(0, 1);
  if (e.key === "ArrowLeft") snake.setDirection(-1, 0);
  if (e.key === "ArrowRight") snake.setDirection(1, 0);
});

function startGame() {
  running = true;
  loop();
}

function loop() {
  if (!running) return;

  timer = setTimeout(() => {
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawGrid(ctx);

    if (mode === "AI") {
      const move = getAIMove(snake, food, TILE_COUNT);
      snake.setDirection(move.dx, move.dy);
    }

    const head = snake.move();

    if (head.x === food.x && head.y === food.y) {
      score++;
      document.getElementById("score").textContent = score;
      food.spawn();
    } else {
      snake.shrink();
    }

    food.draw(ctx);
    snake.draw(ctx);

    if (
      head.x < 0 || head.y < 0 ||
      head.x >= TILE_COUNT || head.y >= TILE_COUNT ||
      snake.isSelfCollision()
    ) {
      alert("Game Over");
      running = false;
      return;
    }

    loop();
  }, 120);
}

window.setManual = () => {
  mode = "Manual";
  document.getElementById("mode").textContent = mode;
};

window.setAI = () => {
  mode = "AI";
  document.getElementById("mode").textContent = mode;
};

window.resetGame = () => {
  snake = new Snake();
  food = new Food();
  score = 0;
  document.getElementById("score").textContent = score;
  running = false;
  startGame();
};

window.onload = () => {
  snake = new Snake();
  food = new Food();
  startGame();
};
