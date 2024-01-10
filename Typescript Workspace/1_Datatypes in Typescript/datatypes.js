var companyName; // strictly typed lang
//companyName=890;  //incompatible value
companyName = "NEOSOFT";
//companyName=true; 
console.log(companyName);
var salary;
salary = 78000;
var marriedStatus;
marriedStatus = true;
var employeeId;
employeeId = 890;
employeeId = "e890";
var ss;
var branch = "Rabale";
//branch=8999;
var contactNumber;
contactNumber = 7878787878;
var headoffice;
headoffice = "Dadar";
console.log(headoffice.length);
console.log(headoffice.charAt(0));
var sss;
sss = "hello";
var employee = {
    id: 567,
    name: "hari",
    salary: 78000
};
console.log(employee.id);
console.log(employee.name);
console.log(employee.salary);
for (var key in employee) {
    console.log(key);
    console.log(employee[key]);
}
// Symbol
//*
function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
var res = add(45, 67);
console.log(res);
