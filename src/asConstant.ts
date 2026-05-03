// ass const assertion
//Enum

// set of fixed string leteral 

//type UserRoles ="Amdin" | "Editor" | "Viewer";

//enum UserRoles{
//     Admin="Admin",
//     Editor="Editor",
//     Viewer="Veiwer"


const UserRoles={
     Admin: "Admin",
     Editor:"Editor",
     Viewer: "Veiwer"
} as const;

//UserRoles.Admin='duj'


const canEdit=(role: UserRoles)=>{
    if(role==UserRoles.Admin || role ==UserRoles.Editor){
         return true;
    }else {
         return false;
    }
}