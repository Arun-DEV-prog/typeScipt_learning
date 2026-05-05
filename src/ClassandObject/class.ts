//OPP-class-Object

//parameter Properties


class Animal{
     name: string;
     spacies:string;
     sound: string

     constructor(name: string, spacies: string, sound: string){
         this.name=name;
         this.spacies=spacies;
         this.sound=sound
     }

     makeSound(){
         console.log(`The animal is ${this.name} making ${this.sound} sound`)
     }

}

const Dog= new Animal("Bulet","ghau","Dog");

Dog.name;

const cat=new Animal("Cat","Meow ", "Cat");
cat.makeSound();