var SquadEmployee = /** @class */ (function () {
    function SquadEmployee() {
    }
    SquadEmployee.prototype.getGrossSalary = function () {
        console.log("SQUAD");
        return this.employeeSalary +
            (0.05 * this.employeeSalary) +
            (0.03 * this.employeeSalary) +
            (0.1 * this.employeeSalary) +
            this.squadIncentives;
    };
    return SquadEmployee;
}());
var CoderEmployee = /** @class */ (function () {
    function CoderEmployee() {
    }
    CoderEmployee.prototype.getGrossSalary = function () {
        console.log("CODER");
        return this.employeeSalary +
            (0.05 * this.employeeSalary) +
            (0.03 * this.employeeSalary) +
            (0.1 * this.employeeSalary) +
            this.coderIncentives;
    };
    return CoderEmployee;
}());
var coder = new CoderEmployee();
coder.employeeSalary = 67000;
coder.coderIncentives = 5000;
var squad = new SquadEmployee();
squad.employeeSalary = 67000;
squad.squadIncentives = 8000;
calculateGross(coder);
calculateGross(squad);
function calculateGross(employee) {
    console.log(employee.getGrossSalary());
}
