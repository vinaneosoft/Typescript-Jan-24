var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.deposit = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    return BankAccount;
}());
var account1;
account1 = new BankAccount(); // object gets created in memory : it is sent for initialization : constructor
// typescript bydefault provides 1 default constr (0- paratemer)
// constructor sets initial values to instance variables
console.log("account1:");
console.log(account1.accountNumber);
console.log(account1.customerId);
console.log(account1.accountBalance);
console.log(account1.accountType);
/*state change */
account1.accountNumber = 89898989898;
account1.customerId = 88;
account1.accountType = "Savings";
account1.accountBalance = 0;
console.log(account1);
var account2 = new BankAccount();
console.log("account2:");
console.log(account2.accountNumber);
console.log(account2.customerId);
console.log(account2.accountBalance);
console.log(account2.accountType);
