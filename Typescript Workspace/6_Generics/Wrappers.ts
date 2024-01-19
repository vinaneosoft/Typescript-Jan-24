let s1="Hello";  //string // primitive // literal
console.log(typeof s1);
console.log(s1);

let s4="Hello";
console.log(s1===s4);

let s2=new String("Welcome"); // String // object
console.log(typeof s2);
console.log(s2);

let s3=new String("Welcome");

console.log(s2===s3);  // reference checking

console.log(s1.charAt(0));
console.log(s2.charAt(0));

let ss=s2.valueOf();
console.log(ss);
console.log(typeof ss);

console.log(s2.valueOf()===s3.valueOf());


class Employee{
    employeeId:Number
    employeeSalary:number
    constructor(id:Number=0,salary=0){
        this.employeeId=id;
        this.employeeSalary=salary
    }
}
let e1=new Employee(new Number(1234),56000)
console.log(e1.employeeId);
console.log(typeof e1.employeeId);
console.log(e1.employeeSalary);
console.log(typeof e1.employeeSalary);
console.log(e1);


let num:Number=78;
console.log(typeof num);

let num2=new Number(78);
console.log(typeof num2);

let num3=num2;
console.log(typeof num3);
console.log(num3);
let num4:number;
//num4=num2;

let num5=890;
let num6:Number
num6=num5;
console.log(typeof num6);

let numObject=new Number(num5);