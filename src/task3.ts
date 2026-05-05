type UserResponse={
     info?: {
         address?:{
             zipcode?: string;
         }
     }
}

const user={
 info:{
    address:{
         zipcode: "1234"
    } 
 }
}

const getZipCode =(zipCode: UserResponse)=>{
    return zipCode.info?.address?.zipcode?? "0000"

    
}

console.log(getZipCode(user))