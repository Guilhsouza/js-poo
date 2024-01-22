"use strict";
class Products {
    constructor(name, description, price, inStock = 0) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
    }
    addToStock(amountInStock) {
        this.inStock += amountInStock;
    }
    calculateDiscount(discountPercentage) {
        return this.price - (this.price * (discountPercentage / 100));
    }
}
const product1 = new Products('produto1', 'um produto', 30);
console.log(product1);
product1.addToStock(5);
console.log(product1);
console.log(product1.calculateDiscount(20));
