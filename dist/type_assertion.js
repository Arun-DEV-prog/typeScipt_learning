"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = 33;
anything.toFixed(3);
const kgToGMConverter = (input) => {
    if (typeof input == "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted output is ${Number(value) * 100} kg`;
    }
};
const result1 = kgToGMConverter(2);
const result2 = kgToGMConverter("3 kg");
console.log(result1, result2);
//# sourceMappingURL=type_assertion.js.map