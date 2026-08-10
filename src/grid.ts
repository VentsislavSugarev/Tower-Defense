export const TILE_SIZE = 64; 

export enum TileType {
  Path = "path",
  Buildable = "buildable",
  Blocked = "blocked",
}

export interface GridConfig {
  columns: number;
  rows: number;
}

export class Grid {
  readonly columns: number;
  readonly rows: number;
  private tiles: TileType[][];
 
  constructor(config: GridConfig) {
    this.columns = config.columns;
    this.rows = config.rows;
    this.tiles = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.columns }, () => TileType.Buildable)
    );
  }

  getTile(col: number, row: number): TileType {
    return this.tiles[row][col];
  }

  setTile(col: number, row: number, type: TileType): void {
    this.tiles[row][col] = type;
  }
}