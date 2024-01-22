var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, customerId, accountType, accountBalance) {
        if (accountNumber === void 0) { accountNumber = 11111111; }
        if (customerId === void 0) { customerId = 111; }
        if (accountType === void 0) { accountType = 'savings'; }
        if (accountBalance === void 0) { accountBalance = 0; }
        this.accountNumber = accountNumber;
        this.customerId = customerId;
        this.accountType = accountType;
        this.accountBalance = accountBalance;
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
var account5 = new BankAccount(787878787, 771, 'savings', 55000);
var account6 = new BankAccount(313131313, 3333, 'savings', 48000);
var accounts = new Array();
accounts.push(account1, account2, account3, account4, account5, account6);
//accounts.push("hi");
accounts.forEach(function (account) { return console.log(account); });
console.log("------after sort------");
accounts.sort(function (ac1, ac2) { return ac1.accountBalance - ac2.accountBalance; }).forEach(function (account) { return console.log(account); });
