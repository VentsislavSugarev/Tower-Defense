import { createEnemy, Enemy } from "./entities/enemy.js";
import { Grid, TileType, TILE_SIZE } from "./grid.js";
import { render } from "./render.js";

const grid = new Grid({ columns: 12, rows: 9 });

const pathRow = 4;
for (let col = 0; col < grid.columns; col++) {
  grid.setTile(col, pathRow, TileType.Path);
}


const canvas = document.getElementById("game") as HTMLCanvasElement;
if (canvas == null) {
  throw new Error("Canvas is null");
}

const ctx = canvas.getContext("2d");
if (ctx == null) {
  throw new Error("Context is null");
}
  let lastTimestamp = 0;

  const enemy:Enemy = createEnemy();
  enemy.velocity.x = 5;

render(grid, ctx);
  function loop(timestamp: number){
  let deltaTime: number = (timestamp - lastTimestamp)/1000;
  lastTimestamp = timestamp;
  
  enemy.position.x += enemy.velocity.x * deltaTime
  enemy.position.y += enemy.velocity.y * deltaTime
  console.log(enemy.position) 


  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);