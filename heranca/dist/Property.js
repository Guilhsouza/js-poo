"use strict";
class Property {
    constructor(area, price) {
        this.area = area;
        this.price = price;
        this.area = area;
        this.price = price;
    }
    getPricePerSquareMeter() {
        return this.price / this.area;
    }
}
class House extends Property {
}
class Apartment extends Property {
    constructor(area, price, floor) {
        super(area, price);
        this.floor = floor;
        this.floor = floor;
    }
    getFloor() {
        return `${this.floor.slice(0, 1)}° andar`;
    }
}
const land = new Property(300, 200000);
const someHouse = new House(10, 2000);
const apt = new Apartment(200, 100000, '302');
console.log(apt.getFloor());
console.log(land);
console.log(someHouse.getPricePerSquareMeter());
