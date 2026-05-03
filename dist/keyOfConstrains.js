"use strict";
//keyof: type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "bike";
const user = {
    id: 222,
    name: "arun",
    address: {
        city: "Rng"
    }
};
//const myId=user.id;
//const myName=user.name;
//const myCity=user.address.city;
//replace with functioins
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const product = {
    brand: "HP"
};
const rlt = getPropertyFromObj(product, "brand");
//# sourceMappingURL=keyOfConstrains.js.map