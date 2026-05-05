class BankAccout{
   readonly  userId: number;
    public userName: string;
    protected userBalance: number;


     constructor(userId: number, userName: string, userBalance: number){
          this.userId=userId;
          this.userName=userName;
          this.userBalance=userBalance;
     }

     addBalance(Balance: number){
         this.userBalance=this.userBalance + Balance;
     }

    
     
}


class StudentAccount extends BankAccout{
     test(){
         this.userBalance=1000;
     }
}

 const arunBhaiBankAccount=new BankAccout(111,"arun", 3000);