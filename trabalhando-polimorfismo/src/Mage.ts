import Character from "./Character.js";

export default class Mage extends Character {
    constructor(
        name: string,
        life: number,
        damage: number,
        def: number,
        public magic: number
    ) {
        super(name, life, damage, def)
        this.magic = magic
    }

    atack(charAttacked: Character) {
        const realDamage = (this.damage + this.magic) - charAttacked.def
        charAttacked.life -= realDamage
    }

    heal(charHealed: Character) {
        charHealed.life += (this.magic * 2)
    }
}