export default class Character {
    constructor(
        public name: string,
        public life: number,
        public damage: number,
        public def: number
    ) {
        this.name = name
        this.life = life
        this.damage = damage
        this.def = def
    }

    atack(charAttacked: Character) {
        const realDamage = this.damage - charAttacked.def
        const appliedDamage = charAttacked.life - realDamage

        console.log(appliedDamage);
    }
}