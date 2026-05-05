
//type guard

//in typeof

type Alpaneumeric= number | string;

const add=(num1: Alpaneumeric, num2: Alpaneumeric)=>{
     if( typeof num1 === "number" && num2==="number"){
         return num1+num2;
     }else{
         return num1.toString()+ num2.toString();
     }
};


type NormalUser={
     name: string
}

type AdminUser={
     name: string,
     role: "Admin"
}


const getUser=( user: NormalUser | AdminUser)=>{
      if("role" in user){
         console.log(`${user.name} and his role ${user.role}`)
      }else{
         console.log(`${user.name}`)
      }
}


getUser({name: 'aaa', role: "Admin"})