"use strict";
//function
//arrow function or normal function
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
//arrow function
const add1 = (num2, num3) => num2 + num3;
//Object in function===> method
const poorUser = {
    name: "PoorFamily",
    balance: 0,
    addBalance(value) {
        return this.balance + value;
    }
};
poorUser.addBalance(3000);
//loop in function or callback function
const arr = [1, 2, 3, 4, 5];
const sqrArray = arr.map((item) => {
    return item * item;
});
//# sourceMappingURL=function.js.map