
class BankAccount{
    accountNumber:number;
    customerId:number;
    accountType:string;
    accountBalance:number;

    deposit(amount:number):number{
        this.accountBalance=this.accountBalance+amount; 
        return this.accountBalance;
    }
    // withdraw method
}//class body ended

let account1:BankAccount;
account1=new BankAccount();  // object gets created in memory : it is sent for initialization : constructor
// typescript bydefault provides 1 default constr (0- paratemer)
// constructor sets initial values to instance variables
console.log("account1:");

console.log(account1.accountNumber);
console.log(account1.customerId);
console.log(account1.accountBalance);
console.log(account1.accountType);
/*state change */
account1.accountNumber=89898989898;
account1.customerId=88;
account1.accountType="Savings";
account1.accountBalance=0;

console.log(account1); 

account1.deposit(45000);
console.log(account1);



let account2=new BankAccount();
console.log("account2:");

console.log(account2.accountNumber);
console.log(account2.customerId);
console.log(account2.accountBalance);
console.log(account2.accountType);



// state change and display the object

account2.accountBalance=1000;
account2.accountType="Savings";
account2.deposit(12000);
console.log(account2);

