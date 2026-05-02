"use strict";
//union
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role == "Admin") {
        return "Admin Dashboard";
    }
    else if (role == "User") {
        return "User Dashboard";
    }
};
getDashboard("Admin");
const Shimin = {
    id: "1",
    name: "shimin",
    phoneNo: "200202",
    designation: "CEO",
    teamSize: 40
};
//# sourceMappingURL=unionAndintersection.js.map