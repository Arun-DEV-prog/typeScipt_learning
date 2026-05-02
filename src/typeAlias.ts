//Type Alias
type User={
      id: number,
     name:{
         firstName: string,
         lastName: string,
     },
    gender: 'male' | 'female',
    contactNo: string,
     address: {
         division: string,
         city: string,
     }
}
 
const userInfo1: User={
 id: 123,
 name:{
     firstName: "Arun",
     lastName: "Kumar"
 },
 gender: "male",
 contactNo: "0283994994",
 address:{
     division:"Dhka",
     city:"Gopalganj"
 }
}

type AddFunc=( num1: number, num2: number)=> number;

const add:AddFunc=(num1, num2)=>num1+num2;
