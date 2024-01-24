import Thief from "./Thief.js";
import Mage from "./Mage.js";
import Warrior from "./Warrior.js";

const shaco = new Thief('shaco', 600, 180, 60)
const ra = new Mage('ra', 800, 200, 100, 120)
const garrosh = new Warrior('garrosh', 1000, 100, 300, 100)

console.table({ shaco, ra, garrosh })

garrosh.changePosition()
shaco.atack(garrosh)
ra.atack(shaco)

console.table({ shaco, ra, garrosh })

ra.heal(garrosh)
garrosh.atack(shaco)

console.table({ shaco, ra, garrosh })
