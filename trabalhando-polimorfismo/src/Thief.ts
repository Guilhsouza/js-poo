import Character from "./Character.js";

export default class Thief extends Character {
    atack(charAttacked: Character) {
        const realDamage = (this.damage * 2) - charAttacked.def
        charAttacked.life -= realDamage
    }
}