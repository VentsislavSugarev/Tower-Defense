import { Game } from "./core/game.js";
import { createEnemy, Enemy } from "./entities/enemy.js";
import { Grid, TileType, TILE_SIZE } from "./grid.js";
import { render, renderEnemy } from "./render.js";

const canvas = document.getElementById("game") as HTMLCanvasElement;
if (canvas == null) {
  throw new Error("Canvas is null");
}

const ctx = canvas.getContext("2d");
if (ctx == null) {
  throw new Error("Context is null");
}

const game = new Game(ctx);
game.start;