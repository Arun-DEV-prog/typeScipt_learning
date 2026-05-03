//Generics Functions


//const createArrayWithString=(value: string)=>[value];


//const createArraywithNumber=(value: number)=>[value];


//const createArrayWithUserObj=(value: { id: number, name:string})=>{
//     return [value]
//}



const createArrayWithGenerics=<T>(value: T )=> [value];

const arrString= createArrayWithGenerics("apple");
const arrNum= createArrayWithGenerics(123);



//Tuple


const createArrayTupleWithGeneric=<X, Y>(param: X, param1: Y)=>[param,param1]
