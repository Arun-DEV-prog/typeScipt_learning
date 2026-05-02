"use strict";
//sReads Operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Rahim", "Karin"];
const schoolFriends = ['pintu', 'Paltu', "Jiku"];
friends.push(...schoolFriends);
console.log(friends);
//Object in spread Operator
const usre = {
    name: "Arun",
    PhoneNumber: "0185555555",
};
const otherInfo = {
    hobby: "coding",
    colour: "Black"
};
const userInfo = { ...usre, ...otherInfo };
console.log(userInfo);
//res
const sendInvite = (...friend) => {
    friend.forEach((friend) => {
        console.log(`Send Invitation to ${friend}`);
    });
};
sendInvite("chul", "bul", "Nulll");
//# sourceMappingURL=spreadOperator.js.map