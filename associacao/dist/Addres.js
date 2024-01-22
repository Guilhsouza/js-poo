"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(street, number, neighbohood, city, state) {
        this.street = street;
        this.number = number;
        this.neighbohood = neighbohood;
        this.city = city;
        this.state = state;
        this.street = street;
        this.number = number;
        this.neighbohood = neighbohood;
        this.city = city;
        this.state = state;
    }
    fullAddress() {
        return `Rua: ${this.street} n°${this.number}, Bairro: ${this.neighbohood}, cidade: ${this.city} - ${this.state}`;
    }
}
exports.default = Address;
