var BankAccount = /** @class */ (function () {
    function BankAccount(accNum, customerId, type, accountBalance) {
        if (accNum === void 0) { accNum = 11111111; }
        if (customerId === void 0) { customerId = 111; }
        if (type === void 0) { type = 'savings'; }
        if (accountBalance === void 0) { accountBalance = 0; }
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
var account1 = new BankAccount(12345999, 1111);
var account2 = new BankAccount(78787878);
var account3 = new BankAccount(1233399, 1311, 'current');
var account4 = new BankAccount(123458989, 1811, 'current', 45000);
var account5 = new BankAccount();
console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);
console.log(account5);
