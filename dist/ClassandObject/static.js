"use strict";
//static
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    static count = 0;
    static increment() {
        return Counter.count = Counter.count + 1;
    }
    static decrement() {
        return Counter.count = Counter.count - 1;
    }
}
//const instance1=new Counter();
//console.log(instance1.increment());
//const instance2=new Counter();
// console.log(instance2.increment())
console.log(Counter.increment());
//# sourceMappingURL=static.js.map