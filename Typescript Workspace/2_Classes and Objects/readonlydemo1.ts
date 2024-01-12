class BankAccount{
    constructor(public readonly accountNumber=11111111, public customerId=111, public accountType='savings', public accountBalance=0){
    }
    deposit(amount:number):number{
        this.accountBalance=this.accountBalance+amount; 
        return this.accountBalance;
    }
}//class body ended
let account1=new BankAccount(12345999, 1111);
account1.accountNumber=56565656;
let account2=new BankAccount(78787878);
let account3=new BankAccount(1233399, 1311,'current');
let account4=new BankAccount(123458989, 1811,'current',45000);
let account5=new BankAccount(); // 11111111
account5.accountNumber=1212121212; // change not allowed
let accounts=[account1,account2,account3,account4,account5];
for(let account of accounts){
    console.log(account);
}
console.log(account2.accountNumber); // accessible here
