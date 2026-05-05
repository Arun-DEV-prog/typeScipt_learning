"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    info: {
        address: {
            zipcode: "1234"
        }
    }
};
const getZipCode = (zipCode) => {
    return zipCode.info?.address?.zipcode ?? "0000";
};
console.log(getZipCode(user));
//# sourceMappingURL=task3.js.map