class BankAccount{
    accountNumber:number;
    customerId:number;
    accountType:string;
    accountBalance:number;
//Multiple constructor implementations are not allowed.
 /*    constructor(){

    } */
    constructor(accNum:number, customerId:number, type:string, accountBalance:number){
        this.accountBalance=accountBalance;
        this.accountNumber=accNum;
        this.accountType=type;
        this.customerId=customerId;
    }

    deposit(amount:number):number{
        this.accountBalance=this.accountBalance+amount; 
        return this.accountBalance;
    }
    // withdraw method
}//class body ended

let account1=new BankAccount(6767676767,666,"Savings",10000);
let account2=new BankAccount(9090909090,999,"Savings",5000);
console.log(account1);
console.log(account2);

