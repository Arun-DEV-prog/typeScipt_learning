//constrain: strict rules set 

type Student={
     id: number,
     name: string
}

const addCourseToStudent=<T extends Student>(studentInfo: T)=>{
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
     id: 321,
     name: "Abul",
     hasCar: "pen",
     isMarried: true
}


const student3={
    id: 211,
    name:"Ashik",
    hasWatch: true,
}

const enrollStudent1=addCourseToStudent(student1);
const enrollStudent2=addCourseToStudent(student2);
const enrollStudent3=addCourseToStudent(student3);  