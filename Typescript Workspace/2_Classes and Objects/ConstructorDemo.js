var BankAccount = /** @class */ (function () {
    function BankAccount() {
        console.log("in 0-p constructor");
        this.accountNumber = 1111;
        this.customerId = 1010;
        this.accountType = "Current";
        this.accountBalance = 0;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    return BankAccount;
}()); //class body ended
var account1 = new BankAccount();
account1.accountNumber = 8989898989;
console.log(account1);
account1.accountNumber = 8989898989;
var account2 = new BankAccount();
account2.accountNumber = 9090909090;
console.log(account2);
