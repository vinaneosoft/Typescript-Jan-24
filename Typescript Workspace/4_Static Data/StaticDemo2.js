//
var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(employeeId, employeeName, employeeSalary) {
        if (employeeId === void 0) { employeeId = 0; }
        if (employeeName === void 0) { employeeName = "A"; }
        if (employeeSalary === void 0) { employeeSalary = 0; }
        console.log("....in NeoEmployee constructor");
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
        NeoEmployee.employeeCount++;
    }
    NeoEmployee.getEmployeeCount = function () {
        return NeoEmployee.employeeCount;
    };
    return NeoEmployee;
}());
(function () {
    // this.companyName="Neosoft Tech."
    console.log("....in static block 1");
    NeoEmployee.companyName = "Neosoft Tech.";
})();
(function () {
    console.log("....in static block 2");
    NeoEmployee.employeeCount = 0;
})();
console.log("Count:" + NeoEmployee.getEmployeeCount());
var employee1 = new NeoEmployee(111, "Pavan Kumar", 56000);
console.log("Count:" + NeoEmployee.getEmployeeCount());
var employee2 = new NeoEmployee(121, "Kishori Kumar", 76000);
console.log("Count:" + NeoEmployee.getEmployeeCount());
console.log("Name of 1st employee" + employee1.employeeName);
console.log("Old Name of company= " + NeoEmployee.companyName);
NeoEmployee.companyName = "Neosoft";
console.log("New Name of company= " + NeoEmployee.companyName);
var employee3 = employee1;
console.log("Count:" + NeoEmployee.getEmployeeCount());
console.log(employee3.employeeId + "  " + employee1.employeeId);
console.log(employee3 == employee1);
console.log(employee1 == employee2);
employee1.employeeName = "Pradeep";
console.log(employee3.employeeName);
