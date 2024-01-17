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
        console.log(NeoEmployee.companyName);
    }
    return NeoEmployee;
}());
(function () {
    // this.companyName="Neosoft Tech."
    console.log("....in static block 1");
    NeoEmployee.companyName = "Neosoft Tech.";
})();
(function () {
    console.log("....in static block 2");
})();
//console.log("Old Name of company= "+NeoEmployee.companyName);
var employee1 = new NeoEmployee(111, "Pavan Kumar", 56000);
NeoEmployee.companyName = "Neosoft";
var employee2 = new NeoEmployee(121, "Kishori Kumar", 76000);
console.log("Name of 1st employee" + employee1.employeeName);
//console.log("New Name of company= "+NeoEmployee.companyName);
