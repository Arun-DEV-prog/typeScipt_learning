"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getWork(hour) {
        console.log(`${this.name} work daiy ${hour}`);
    }
}
class Person1 extends Person {
    constructor(name) {
        super(name);
    }
    work(hour) {
        console.log(`${this.name} work daiyl two hours`);
    }
}
class Person2 extends Person {
    constructor(name) {
        super(name);
    }
    person2Work(hour) {
        console.log(`${this.name} daily work ${hour}`);
    }
}
//function guard
const isPerson1 = (user) => {
    return user instanceof Person1;
};
const isPerson2 = (user) => {
    return user instanceof Person2;
};
const getUserInfo = (user) => {
    if (isPerson1(user)) {
        user.work(10);
    }
    else if (isPerson2(user)) {
        user.person2Work(30);
    }
    else {
        user.getWork(90);
    }
};
const person1 = new Person1("Mr. Person1");
const person2 = new Person2("Mr. Person2");
getUserInfo(person1);
//# sourceMappingURL=instanceofguard.js.map