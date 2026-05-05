"use strict";
//type guard
Object.defineProperty(exports, "__esModule", { value: true });
const add = (num1, num2) => {
    if (typeof num1 === "number" && num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
const getUser = (user) => {
    if ("role" in user) {
        console.log(`${user.name} and his role ${user.role}`);
    }
    else {
        console.log(`${user.name}`);
    }
};
getUser({ name: 'aaa', role: "Admin" });
//# sourceMappingURL=typeguard.js.map