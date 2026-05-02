//Object destructuring
//array destructuring


const user={
    id: 1,
    name:{
         firstName: "Arun",
         middleName: "Kumar",
         lastName: "Gender",
    },


    gender:"Male",

}


const {gender,name:{firstName}} =user;
