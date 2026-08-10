import { Grid, TILE_SIZE, TileType } from "./grid.js";

export function render(grid: Grid, ctx: CanvasRenderingContext2D): void {
  for (let row = 0; row < grid.rows; row++) {
    for (let column = 0; column < grid.columns; column++) {
      const type = grid.getTile(column, row);
      const x = TILE_SIZE * column;
      const y = TILE_SIZE * row;
      let color: string;

      if (type == TileType.Path) {
        color = "#8b7355";
      } else if (type == TileType.Buildable) {
        color = "#2e8b57";
      } else {
        color = "#3244ff";
      }

      ctx.fillStyle = color;
      ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
    }
  }
}