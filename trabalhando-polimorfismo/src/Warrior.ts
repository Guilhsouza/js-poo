import Character from "./Character.js";

export default class Warrior extends Character {
    constructor(
        name: string,
        life: number,
        damage: number,
        def: number,
        public shield: number,
        public position: string = 'atack mode'
    ) {
        super(name, life, damage, def)
        this.shield = shield
    }

    atack(charAttacked: Character) {
        if (this.position === 'defense mode') {
            return console.log('não é possível atacar na posição de defesa!');
        }

        const realDamage = this.damage - charAttacked.def
        charAttacked.life -= realDamage
    }

    changePosition() {
        this.def += this.shield;

        if (this.position === 'defense mode') {
            this.def -= this.shield
            return this.position = 'atack mode'
        }

        return this.position = 'defense mode'
    }
}