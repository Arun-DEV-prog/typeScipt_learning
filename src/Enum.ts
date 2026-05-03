//Enum

// set of fixed string leteral 

//type UserRoles ="Amdin" | "Editor" | "Viewer";

enum UserRoles{
     Admin="Admin",
     Editor="Editor",
     Viewer="Veiwer"
}

const canEdit=(role: UserRoles)=>{
    if(role==UserRoles.Admin || role ==UserRoles.Editor){
         return true;
    }else {
         return false;
    }
}