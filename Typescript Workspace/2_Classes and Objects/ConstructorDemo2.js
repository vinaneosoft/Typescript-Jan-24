var BankAccount = /** @class */ (function () {
    //Multiple constructor implementations are not allowed.
    /*    constructor(){
   
       } */
    function BankAccount(accNum, customerId, type, accountBalance) {
        this.accountBalance = accountBalance;
        this.accountNumber = accNum;
        this.accountType = type;
        this.customerId = customerId;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    return BankAccount;
}()); //class body ended
var account1 = new BankAccount(6767676767, 666, "Savings", 10000);
var account2 = new BankAccount(9090909090, 999, "Savings", 5000);
console.log(account1);
console.log(account2);
console.log(account1.accountNumber);
console.log(account1.accountBalance);
console.log(account1.accountType);
console.log(account1.customerId);
// for in loop
console.log("-----for in loop-----");
for (var key in account1) {
    console.log(key);
    console.log(account1[key]);
}
