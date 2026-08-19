import { createEnemy, Enemy } from "../entities/enemy.js";
import { Grid, TileType } from "../grid.js";
import { render as renderGrid, renderEnemy } from "../render.js";

export class Game{

    grid: Grid
    enemy: Enemy 
    lastTimeStamp: number = 0
    ctx: CanvasRenderingContext2D

    constructor( ctx: CanvasRenderingContext2D){
        this.ctx = ctx;
        this.grid = new Grid({columns: 12, rows: 9});

        const pathRow = 4;
        for (let col = 0; col < this.grid.columns; col++) {
          this.grid.setTile(col, pathRow, TileType.Path);
        }

        this.enemy = createEnemy();
        this.enemy.velocity.x = 200;
    }

    update(deltaTime: number): void{
          this.enemy.position.x += this.enemy.velocity.x * deltaTime
          this.enemy.position.y += this.enemy.velocity.y * deltaTime

          if(this.enemy.position.x >= this.ctx.canvas.width || this.enemy.position.x <= 0){
            this.enemy.velocity.x *= -1;
          }
          console.log(this.enemy.position) 
    }

    render(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        renderGrid(this.grid, this.ctx);
        renderEnemy(this.enemy, this.ctx)
    }

    start(){
        const tick = (timestamp: number) => {
            let deltaTime = (timestamp - this.lastTimeStamp)/1000;
            this.lastTimeStamp = timestamp;
            this.update(deltaTime);
            this.render();
            requestAnimationFrame(tick)
        };

        requestAnimationFrame(tick)
    }
}