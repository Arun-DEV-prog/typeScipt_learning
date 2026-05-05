"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//polymorphism:
class Person {
    getSleep() {
        console.log(`I sleep for 5 hours`);
    }
}
class Student extends Person {
    getSleep() {
        console.log(`I am Student 4 hours`);
    }
}
class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am next level developer , i sleep 1 hours`);
    }
}
const gtSleepingHours = (param) => {
    param.getSleep();
};
const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();
gtSleepingHours(person1);
//another example of polymorphism
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
const getArea = (param) => {
    console.log(param.getArea());
};
const shap1 = new Shape();
const shap2 = new Circle(33);
const shap3 = new Rectangle(400, 33);
getArea(shap2);
//# sourceMappingURL=polymorphisam.js.map