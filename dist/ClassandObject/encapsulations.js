"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccout {
    userId;
    userName;
    userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(Balance) {
        this.userBalance = this.userBalance + Balance;
    }
    callHiddenMethod(balance) {
        this.addBalance(balance);
    }
}
class StudentAccount extends BankAccout {
    test() {
        this.userBalance = 1000;
    }
}
const arunBhaiBankAccount = new BankAccout(111, "arun", 3000);
//# sourceMappingURL=encapsulations.js.map