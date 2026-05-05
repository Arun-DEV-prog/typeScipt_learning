"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addToCart = {
    name: "Book",
    price: 200,
    quantity: 2
};
const calculateTota = (cart) => {
    const { quantity = 1, price } = cart;
    return price * quantity;
};
console.log(calculateTota(addToCart));
//# sourceMappingURL=task1.js.map