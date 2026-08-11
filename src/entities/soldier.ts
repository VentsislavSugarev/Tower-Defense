import { Attacker, Damageable, Movable } from "./capabilities.js";

export type Soldier = Movable & Damageable & Attacker & {}

export function createSoldier():Soldier{
    const soldier: Soldier = {
        position: {x:0,y:0},
        velocity: {x:0, y: 0},
        health: 20,
        maxHealth: 20,
        damage: 1,
        range: 1,
    };
        return soldier;
    }