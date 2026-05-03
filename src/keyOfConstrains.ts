//keyof: type operator

type RichPeopleVehicle={
    car: string,// key : value
    bike: string,
    cng: string
}

type MyVehicle="Bike" | "Car" | "Cng";

type MyVehicle1= keyof RichPeopleVehicle;

const myVehicle: MyVehicle1="bike";


type User={
     id:number,
     name: string,
     address:{
         city: string
     }
}


const user={
    id: 222,
    name: "arun",
    address: {
         city: "Rng"
    }
};


//const myId=user.id;
//const myName=user.name;
//const myCity=user.address.city;

//replace with functioins

const getPropertyFromObj=<X>(obj: X, key: keyof X)=>{
  return obj[key];
}


const product={
     brand: "HP"
}


const rlt=getPropertyFromObj(product, "brand")
