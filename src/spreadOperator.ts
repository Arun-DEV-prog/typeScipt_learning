//sReads Operator

const friends:string[]=["Rahim", "Karin"]

const schoolFriends:string[]=['pintu','Paltu',"Jiku"]
friends.push(...schoolFriends);

console.log(friends)

//Object in spread Operator

const usre={
     name:"Arun",
     PhoneNumber:"0185555555",

}

const otherInfo={
     hobby: "coding",
     colour: "Black"
}


const userInfo={...usre, ...otherInfo}
console.log(userInfo)



//res

const sendInvite=( ...friend:string[])=>{
    
    friend.forEach((friend: string)=> {
          console.log(`Send Invitation to ${friend}`)
    })

}

sendInvite("chul","bul", "Nulll")