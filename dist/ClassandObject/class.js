"use strict";
//OPP-class-Object
Object.defineProperty(exports, "__esModule", { value: true });
//parameter Properties
class Animal {
    name;
    spacies;
    sound;
    constructor(name, spacies, sound) {
        this.name = name;
        this.spacies = spacies;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The animal is ${this.name} making ${this.sound} sound`);
    }
}
const Dog = new Animal("Bulet", "ghau", "Dog");
Dog.name;
const cat = new Animal("Cat", "Meow ", "Cat");
cat.makeSound();
//# sourceMappingURL=class.js.map