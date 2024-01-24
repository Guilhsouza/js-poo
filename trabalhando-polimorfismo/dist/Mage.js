import Character from "./Character.js";
export default class Mage extends Character {
    constructor(name, life, damage, def, magic) {
        super(name, life, damage, def);
        this.magic = magic;
        this.magic = magic;
    }
    atack(charAttacked) {
        const realDamage = (this.damage + this.magic) - charAttacked.def;
        charAttacked.life -= realDamage;
    }
    heal(charHealed) {
        charHealed.life += (this.magic * 2);
    }
}
