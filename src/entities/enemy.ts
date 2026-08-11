import { Attacker, Damageable, Movable } from "./capabilities.js";

export type Enemy = Movable & Damageable & Attacker &{
    goldReward: number
}


export function createEnemy():Enemy{
    const enemy: Enemy = {
        position: {x:0,y:0},
        velocity: {x:0, y: 0},
        health: 20,
        maxHealth: 20,
        damage: 1,
        range: 1,
        goldReward: 10
    };
        return enemy;
    }