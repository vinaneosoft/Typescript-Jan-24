var s1 = "Hello"; //string // primitive // literal
console.log(typeof s1);
console.log(s1);
var s4 = "Hello";
console.log(s1 === s4);
var s2 = new String("Welcome"); // String // object
console.log(typeof s2);
console.log(s2);
var s3 = new String("Welcome");
console.log(s2 === s3); // reference checking
console.log(s1.charAt(0));
console.log(s2.charAt(0));
var ss = s2.valueOf();
console.log(ss);
console.log(typeof ss);
console.log(s2.valueOf() === s3.valueOf());
var Employee = /** @class */ (function () {
    function Employee(id, salary) {
        if (id === void 0) { id = 0; }
        if (salary === void 0) { salary = 0; }
        this.employeeId = id;
        this.employeeSalary = salary;
    }
    return Employee;
}());
var e1 = new Employee(1234, 56000);
console.log(e1.employeeId);
console.log(typeof e1.employeeId);
console.log(e1.employeeSalary);
console.log(typeof e1.employeeSalary);
console.log(e1);
var num = 78;
console.log(typeof num);
var num2 = new Number(78);
console.log(typeof num2);
var num3 = num2;
console.log(typeof num3);
console.log(num3);
var num4;
//num4=num2;
var num5 = 890;
var num6;
num6 = num5;
console.log(typeof num6);
