type User={
     name: string,
     age: number
}


type Role ={
     role: "admin" | "user"
}

type userWithRole = User & Role;


//interface working with object,array, function

interface IUser{
     name: string;
     age: number;
}


const user1: userWithRole={
     name: "A>K Roy",
     age: 23,
     role: 'admin'
}

const user2: IUser={
     name : "Jaku",
     age: 23
}


//interface

interface IUserWithRole extends IUser {
     role: "admin" | "user";
}



const user3:IUserWithRole={
     name: "puku",
     age: 30,
     role: "user"
}



// for funcion
 interface IAdd{
     (num1: number, num2: number): number;
 }

const add:IAdd =(num1 , num2)=>{
     return num1 + num2; 
}



type Friends= string [];



interface IFriends {
     [index: number]: string
}
const friends: IFriends =["A", " B" , "C"];