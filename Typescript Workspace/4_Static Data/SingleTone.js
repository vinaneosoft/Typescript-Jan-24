var Boss = /** @class */ (function () {
    function Boss() {
        this.bossName = "Meena";
    }
    Boss.getInstance = function () {
        if (Boss.boss == null)
            Boss.boss = new Boss();
        return Boss.boss;
    };
    return Boss;
}());
var boss1 = Boss.getInstance();
console.log(boss1);
var boss2 = Boss.getInstance();
console.log(boss2);
console.log(boss1 == boss2);
