import { Attacker, Damageable, Movable } from "./capabilities.js";
import { Item } from "./types.js";

export type Player = Movable & Damageable & Attacker &{
    gold: number;
    inventory: Item[];
}

export function createPlayer():Player{
    const player: Player = {
        position: {x:0,y:0},
        velocity: {x:0, y: 0},
        health: 20,
        maxHealth: 20,
        damage: 1,
        range: 1,
        gold: 0,
        inventory: []
    };
        return player;
    }