import Character from "./Character.js";
export default class Warrior extends Character {
    constructor(name, life, damage, def, shield, position = 'atack mode') {
        super(name, life, damage, def);
        this.shield = shield;
        this.position = position;
        this.shield = shield;
    }
    atack(charAttacked) {
        if (this.position === 'defense mode') {
            return console.log('não é possível atacar na posição de defesa!');
        }
        const realDamage = this.damage - charAttacked.def;
        charAttacked.life -= realDamage;
    }
    changePosition() {
        this.def += this.shield;
        if (this.position === 'defense mode') {
            this.def -= this.shield;
            return this.position = 'atack mode';
        }
        return this.position = 'defense mode';
    }
}
