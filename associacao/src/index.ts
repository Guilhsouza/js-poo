import Address from "./Addres";
import Person from "./Person";

const address = new Address(
    'Rua1', 85, 'Bairro1', 'Cidade1', 'SP'
)

const gui = new Person('gui', address)

console.log(gui);
console.log(gui.address.fullAddress())