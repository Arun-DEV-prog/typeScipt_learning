"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(hours) {
        console.log(`${this.name} is slepping for ${hours} hours`);
    }
}
const student1 = new Parent("Faruk", 22, "Gopali");
student1.getSleep(15);
class Student extends Parent {
    designation;
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takClass(h) {
        console.log(`${this.name} take ${h} class `);
    }
}
const student2 = new Student("Saleh", 222, "Dahka", "assistant");
student2.takClass(100);
//# sourceMappingURL=inheritence.js.map