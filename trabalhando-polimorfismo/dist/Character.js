export default class Character {
    constructor(name, life, damage, def) {
        this.name = name;
        this.life = life;
        this.damage = damage;
        this.def = def;
        this.name = name;
        this.life = life;
        this.damage = damage;
        this.def = def;
    }
    atack(charAttacked) {
        const realDamage = this.damage - charAttacked.def;
        const appliedDamage = charAttacked.life - realDamage;
        console.log(appliedDamage);
    }
}
