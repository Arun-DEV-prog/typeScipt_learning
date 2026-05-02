//function
//arrow function or normal function


function add(num1: number, num2: number):number{
     return num1+num2;
}

add(2,2);

//arrow function

const add1 =(num2:number, num3:number)=> num2+num3;




//Object in function===> method

const poorUser={
     name:"PoorFamily",
     balance: 0,
     addBalance(value: number): number{
         return this.balance+value;
     }
}

poorUser.addBalance(3000);



//loop in function or callback function

const arr: number[]=[1,2,3,4,5];

const sqrArray :number[]=arr.map((item: number):number=>{
     return item*item;
})