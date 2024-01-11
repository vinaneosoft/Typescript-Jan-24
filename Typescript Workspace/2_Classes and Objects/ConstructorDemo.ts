class BankAccount{
    accountNumber:number;
    customerId:number;
    accountType:string;
    accountBalance:number;
    constructor(){
        console.log("in 0-p constructor");
        this.accountNumber=1111;
        this.customerId=1010
        this.accountType="Current";
        this.accountBalance=0;
    }
    deposit(amount:number):number{
        this.accountBalance=this.accountBalance+amount; 
        return this.accountBalance;
    }
    // withdraw method
}//class body ended


let account1=new BankAccount(); // constructors called implicitly
account1.accountNumber=8989898989;
console.log(account1);
let account2=new BankAccount();
account2.accountNumber=9090909090;
console.log(account2);

// state change