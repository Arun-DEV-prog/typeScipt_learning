"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//getter and setter
class BankAccout {
    userId;
    userName;
    userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    // Balance set
    // addBalance(Balance: number){
    //     this.userBalance=this.userBalance + Balance;
    // }
    //using setter
    set addBalance(ammount) {
        this.userBalance = this.userBalance + ammount;
    }
    //get balance
    //getBalance(){
    //     return this.userBalance;
    //}
    //using getter
    get getBalance() {
        return this.userBalance;
    }
}
class StudentAccount extends BankAccout {
    test() {
        this.userBalance = 1000;
    }
}
const arunBhaiBankAccount = new BankAccout(111, "arun", 3000);
arunBhaiBankAccount.addBalance = 1000000;
console.log(arunBhaiBankAccount.getBalance);
//# sourceMappingURL=getter_setter.js.map