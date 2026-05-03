"use strict";
//Generics Functions
Object.defineProperty(exports, "__esModule", { value: true });
//const createArrayWithString=(value: string)=>[value];
//const createArraywithNumber=(value: number)=>[value];
//const createArrayWithUserObj=(value: { id: number, name:string})=>{
//     return [value]
//}
const createArrayWithGenerics = (value) => [value];
const arrString = createArrayWithGenerics("apple");
const arrNum = createArrayWithGenerics(123);
const object = createArrayWithGenerics({ id: 1, name: "Samead" });
//Tuple
const createArrayTupleWithGeneric = (param, param1) => [param, param1];
const arrayTupleWithGeneric = createArrayTupleWithGeneric(20, "apple");
//const addCourse
const addCourseToStudent = (studentInfo) => {
    return {
        course: "Next level",
        ...studentInfo
    };
};
const student1 = {
    id: 12,
    name: "Axim",
    hasPen: true,
};
const student2 = {
    ide: 321,
    name: "Abul",
    hasCar: "pen",
    isMarried: true
};
const enrollStudent1 = addCourseToStudent(student1);
const enrollStudent2 = addCourseToStudent(student2);
//# sourceMappingURL=Genericsfunction.js.map