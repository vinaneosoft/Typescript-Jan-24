class BankAccount{
    constructor(private accountNumber=11111111, 
        private customerId=111, 
        private accountType='savings', 
        private accountBalance=0){
    }
    deposit(amount:number):number{
        this.accountBalance=this.accountBalance+amount; 
        return this.accountBalance;
    }

    get accNum(){
        return this.accountNumber;
    }
    /*annotation not allowed for set property */
    set accNum(accountNumber:number){
        this.accountNumber=accountNumber;
    }

    get accBalance(){
        return this.accountBalance;
    }
    set accBalance(accountBalance:number){
        this.accountBalance=accountBalance;
    }

}//class body ended
let account1=new BankAccount(12345999, 1111);
let account2=new BankAccount(78787878);
let account3=new BankAccount(1233399, 1311,'current');
let account4=new BankAccount(123458989, 1811,'current',45000);
let account5=new BankAccount();

//console.log(account2.accountNumber); //Property 'accountNumber' is private and only accessible within class 'BankAccount'
console.log(account2.accNum);
//account3.accountBalance=56000;
account3.accBalance=56000;