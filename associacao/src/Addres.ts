class Address {
    constructor(
        public street: string,
        public number: number,
        public neighbohood: string,
        public city: string,
        public state: string
    ) {
        this.street = street
        this.number = number
        this.neighbohood = neighbohood
        this.city = city
        this.state = state
    }

    fullAddress() {
        return `Rua: ${this.street} n°${this.number}, Bairro: ${this.neighbohood}, cidade: ${this.city} - ${this.state}`
    }
}

export default Address