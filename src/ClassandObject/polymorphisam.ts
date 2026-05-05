//polymorphism:
class Person{
     getSleep(){
         console.log(`I sleep for 5 hours`);
     }
}


class Student extends Person{
     getSleep(): void {
         console.log(`I am Student 4 hours`)
     }
}

class NextLevelDeveloper extends Person{
     getSleep(): void {
         console.log(`I am next level developer , i sleep 1 hours`)
     }
}

const gtSleepingHours= (param: Person)=>{
     param.getSleep();

}

const person1 =new Person();
 const person2=new Student();
const person3=new NextLevelDeveloper();

gtSleepingHours(person1);



//another example of polymorphism

class Shape{
     getArea(){
         return 0;
     }
}

class Circle extends Shape{
     radius: number;
    constructor(radius:number){
        super();
         this.radius=radius;
    }

     getArea(): number {
         return Math.PI *this.radius* this.radius;
     }
}


class Rectangle extends Shape{
     height: number;
     width: number;

      constructor(height: number, width: number){
         super();
         this.height=height;
          this.width=width;

      }


        getArea(): number {
         return  this.height* this.width;
     }
}


const getArea=(param: Shape)=>{
    console.log(  param.getArea())
}

  const shap1= new Shape();
   const shap2= new Circle(33);
   const shap3= new Rectangle(400,33)

getArea(shap2);