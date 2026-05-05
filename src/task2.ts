type Person ={
     name: string;
     age: number
};

type JobDetails={
     role: string;
     salary: number;
}

type Employee =Person & JobDetails;

const getProfile=(person:Employee)=>{
      return `Name: ${person.name} , Role : ${person.role}`;
}