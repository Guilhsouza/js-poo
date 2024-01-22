import Address from "./Addres";
class Person {
    constructor(
        public name: string,
        public address: Address
    ) {
        this.name = name
        this.address = address
    }
}

export default Person