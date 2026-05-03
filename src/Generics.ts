//Dynamically Genarallize

type GenericArray<T> =Array<T>;

const rollNumber :GenericArray<number> =[1,2,3,4];

const isElligileList : GenericArray<boolean> =[true,false];


const sqrFunctioin=(value: number)=>{
     return value*value;
}

sqrFunctioin (4);


type Coordinate<X,Y>=[X, Y]


const coordinate1: Coordinate<number,number> =[20,30]
const coordinate2: Coordinate<string, string> =["20","30"]

// object in Generic

const userList : GenericArray<{name: string, age: number}> =[
     {
        name : "MR X",
        age: 30
     },
     {
         name : "Mr Y",
         age: 25
     }
]