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
    function Employee(employeeId, employeeName, basicSalary) {
        if (employeeId === void 0) { employeeId = 0; }
        if (employeeName === void 0) { employeeName = "AAA"; }
        if (basicSalary === void 0) { basicSalary = 0; }
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.basicSalary = basicSalary;
        console.log("in Employee Constructor....");
    }
    Employee.prototype.getGrossSalary = function () {
        console.log("............in Employee method");
        return this.basicSalary +
            (0.05 * this.basicSalary) +
            (0.03 * this.basicSalary) +
            (0.1 * this.basicSalary);
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(empId, empName, empSalary, extraPay, trainingTopics) {
        if (empId === void 0) { empId = 0; }
        if (empName === void 0) { empName = "AAA"; }
        if (empSalary === void 0) { empSalary = 0; }
        if (extraPay === void 0) { extraPay = 0; }
        if (trainingTopics === void 0) { trainingTopics = []; }
        var _this = _super.call(this, empId, empName, empSalary) || this; // p superclass constructor
        _this.extraPay = extraPay;
        _this.trainingTopics = trainingTopics;
        console.log("in Trainer constructor");
        return _this;
    }
    Trainer.prototype.addTopics = function (topic) {
        this.trainingTopics.push(topic);
        return this.trainingTopics.length;
    };
    Trainer.prototype.getPayPerMonth = function (extraHrs) {
        return extraHrs * this.extraPay;
    };
    Trainer.prototype.getGrossSalary = function () {
        console.log(".................in Trainer method");
        return _super.prototype.getGrossSalary.call(this) +
            this.getPayPerMonth(60);
    };
    return Trainer;
}(Employee));
var employee = new Employee(111, "Poonam Pawar", 90000);
var gse = employee.getGrossSalary(); // Employee class method
console.log(employee);
console.log("Gross salary for employee " + employee.employeeName + ": " + gse);
var trainer1 = new Trainer(567, "Vijay Kumar", 90000, 800, ['java', 'angular', 'typescript']);
console.log(trainer1);
var gst1 = trainer1.getGrossSalary(); // Trainer class method
console.log("Gross salary for trainer " + trainer1.employeeName + ": " + gst1);
// upcasting: subclass object is casted to superclass
var tremployee = trainer1;
// forget its own properties but overidding methods stil have access
console.log(tremployee.getGrossSalary());
