

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
}