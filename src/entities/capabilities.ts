import { Vec2 } from "./types.js";

export interface Movable{
    position: Vec2;
    velocity: Vec2;
}

export interface Damageable{
    health: number;
    maxHealth: number;
}

export interface Attacker{
    damage: number;
    range: number;
}