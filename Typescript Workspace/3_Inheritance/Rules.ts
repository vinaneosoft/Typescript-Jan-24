class Employee{
    constructor( public employeeId=0,
        public employeeName="AAA",
        public basicSalary=0) {
        console.log("in Employee Constructor....");
    }
    getGrossSalary():ABC{
        console.log("............in Employee method");
        return new ABC(); // returning object
   }
}
class Trainer extends Employee{
    constructor(empId=0,empName="AAA",empSalary=0,public extraPay=0, 
        public trainingTopics:string[]=[]) {
        super(empId,empName,empSalary); // p superclass constructor
        console.log("in Trainer constructor");
    } 
   addTopics(topic:string):number{
       this.trainingTopics.push(topic);
       return this.trainingTopics.length;
   }
    getPayPerMonth(extraHrs:number){
        return extraHrs*this.extraPay;
   }
    getGrossSalary():PQR{
    console.log(".................in Trainer method");
     return new PQR()
   }
}
let employee=new Employee(111, "Poonam Pawar",90000);
let gse=employee.getGrossSalary(); // Employee class method
console.log(employee);
console.log("Gross salary for employee "+employee.employeeName+": "+gse);

let trainer1=new Trainer(567,"Vijay Kumar",90000,800,['java','angular','typescript']);  
console.log(trainer1);
let gst1=trainer1.getGrossSalary(); // Trainer class method
console.log("Gross salary for trainer "+trainer1.employeeName+": "+gst1);

let trainer2=new Trainer(123,"Rahul Kashyap", 78000,1000,['c#','python','typescript']);  
console.log(trainer2);

let trainer3=new Trainer();



// Rules of overrding a method from superclass to subclass
/* 1. scope : same or increased 
   2. name : must be same
   3. parameters : number of p and data types must be same
   4. return type :
    i. if return type  is primitive then it must be same
    ii. if return type is void  then any return type in subclass allowed
    iii. if superclass method is returing object then in subclass covariants are allowed

*/ 

class ABC{

}

class PQR extends ABC{
    
}