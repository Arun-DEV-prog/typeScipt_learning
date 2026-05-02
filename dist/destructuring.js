"use strict";
//Object destructuring
//array destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: {
        firstName: "Arun",
        middleName: "Kumar",
        lastName: "Gender",
    },
    gender: "Male",
};
const { gender, name: { firstName } } = user;
//# sourceMappingURL=destructuring.js.map