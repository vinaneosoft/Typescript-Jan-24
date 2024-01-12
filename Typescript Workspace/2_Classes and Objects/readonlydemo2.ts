
const pie=3.142;
//pie=67;

class BankAccount{
     public readonly  accountNumber:number;
    customerId:number;
    accountType:string;
    accountBalance:number;
 
    constructor(accNum:number, customerId:number, type:string, accountBalance:number){
        this.accountBalance=accountBalance;
        this.accountNumber=accNum;
        this.accountType=type;
        this.customerId=customerId;
    }
}//class body ended

let account1=new BankAccount(9090909090,999,"Savings",67000);
//accountNumber be constant
//account1.accountNumber=99999999;
account1.accountBalance=89000;

let account2= new BankAccount(8080808080,888,"Cuurent",45000);
//account2.accountNumber=7070707070;