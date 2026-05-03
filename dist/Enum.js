"use strict";
//Enum
Object.defineProperty(exports, "__esModule", { value: true });
// set of fixed string leteral 
//type UserRoles ="Amdin" | "Editor" | "Viewer";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Veiwer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role == UserRoles.Admin || role == UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=Enum.js.map