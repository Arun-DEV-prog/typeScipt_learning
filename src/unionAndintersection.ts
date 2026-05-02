//union

type UserRole='Admin' | "User" | "guest"

const getDashboard= (role: UserRole)=>{
     if(role=="Admin"){
         return "Admin Dashboard";
     }else if(role=="User"){
         return "User Dashboard";
     }
}


getDashboard("Admin")

type Employee={
     id: string;
     name: string,
     phoneNo: string
}


type Manager ={
     designation: string;
      teamSize: number;
}


type EmployeManager =Employee & Manager;



const Shimin : EmployeManager={
    id: "1",
    name: "shimin",
    phoneNo: "200202",
    designation:"CEO",
    teamSize: 40 
}

