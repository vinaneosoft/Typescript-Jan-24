var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeId = 0;
        this.employeeName = "AAA";
        this.basicSalary = 0;
    }
    Employee.prototype.getGrossSalary = function () {
        // TA: 5%, DA 3% HRA  10%
        return this.basicSalary + (0.05 * this.basicSalary) + (0.03 * this.basicSalary) + (0.1 * this.basicSalary);
    };
    return Employee;
}());
// subclass directly inherits visible properties of superclass
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.extraPay = 0;
        _this.trainingTopics = [];
        return _this;
    }
    Trainer.prototype.addTopics = function (topic) {
        this.trainingTopics.push(topic);
        return this.trainingTopics.length;
    };
    return Trainer;
}(Employee)); // subclass body ended here // protected scope of super class ended here
var trainer1 = new Trainer(); // call automalically goes to super class constructor and then subclass constructor
console.log(trainer1);
