//Generics Functions


//const createArrayWithString=(value: string)=>[value];


//const createArraywithNumber=(value: number)=>[value];


//const createArrayWithUserObj=(value: { id: number, name:string})=>{
//     return [value]
//}



const createArrayWithGenerics=<T>(value: T )=> [value];

const arrString= createArrayWithGenerics("apple");
const arrNum= createArrayWithGenerics(123);

const object=createArrayWithGenerics({id:1, name:"Samead"})



//Tuple


const createArrayTupleWithGeneric=<X, Y>(param: X, param1: Y)=>[param,param1]


const arrayTupleWithGeneric=createArrayTupleWithGeneric(20,"apple");



//const addCourse

const addCourseToStudent=<T>(studentInfo: T)=>{
     return {
         course: "Next level",
         ...studentInfo
     }
}


const student1={
     id:12,
     name:"Axim",
     hasPen: true,
};


const student2={
     ide: 321,
     name: "Abul",
     hasCar: "pen",
     isMarried: true
}

const enrollStudent1=addCourseToStudent(student1);
const enrollStudent2=addCourseToStudent(student2);
