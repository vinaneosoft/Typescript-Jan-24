class BankAccount{
    constructor(public accountNumber=11111111, public customerId=111, public accountType='savings', public accountBalance=0){
    }
    deposit(amount:number):number{
        this.accountBalance=this.accountBalance+amount; 
        return this.accountBalance;
    }
}//class body ended
let account1=new BankAccount(12345999, 1111);
let account2=new BankAccount(78787878);
let account3=new BankAccount(1233399, 1311,'current');
let account4=new BankAccount(123458989, 1811,'current',45000);
let account5=new BankAccount(787878787, 771,'savings',55000);
let account6=new BankAccount(313131313, 3333,'savings',48000);

let accounts=new Array<BankAccount>();
accounts.push(account1,account2,account3,account4,account5,account6);
//accounts.push("hi");

accounts.forEach(account=>console.log(account))
console.log("------after sort------");

accounts.sort((ac1,ac2)=>ac1.accountBalance-ac2.accountBalance).forEach(account=>console.log(account))
