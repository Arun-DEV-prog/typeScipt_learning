//getter and setter
class BankAccout{
   readonly  userId: number;
    public userName: string;
    protected userBalance: number;


     constructor(userId: number, userName: string, userBalance: number){
          this.userId=userId;
          this.userName=userName;
          this.userBalance=userBalance;
     }
    // Balance set
    // addBalance(Balance: number){
    //     this.userBalance=this.userBalance + Balance;
    // }
    //using setter
     set addBalance(ammount: number){
         this.userBalance=this.userBalance + ammount;
     }

    //get balance
    //getBalance(){
    //     return this.userBalance;
    //}

    //using getter
    get getBalance(){
         return this.userBalance;
    }

     
}


class StudentAccount extends BankAccout{
     test(){
         this.userBalance=1000;
     }
}

 const arunBhaiBankAccount=new BankAccout(111,"arun", 3000);
 arunBhaiBankAccount.addBalance=1000000;
console.log(arunBhaiBankAccount.getBalance);
