class Parent{
     name: string;
     age: number;
     address: string;

     constructor(name: string, age: number, address: string){
         this.name=name;
         this.age=age;
         this.address=address
     }


     getSleep(hours: number){
         console.log(`${this.name} is slepping for ${hours} hours`)
     }
}

const student1= new Parent("Faruk", 22, "Gopali");

student1.getSleep(15);


class Student extends Parent{
     
      designation: string;

      constructor(name: string, age: number, address: string, designation: string){
         super(name, age, address)
        
          this.designation=designation;
     }


    


     takClass(h: number){
         console.log(`${this.name} take ${h} class `)
     }
}


const student2=new Student("Saleh", 222, "Dahka", "assistant");
student2.takClass(100);