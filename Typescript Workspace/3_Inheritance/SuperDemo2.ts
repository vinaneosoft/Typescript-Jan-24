class Employee{
    constructor( public employeeId=0,
        public employeeName="AAA",
        public basicSalary=0) {
        console.log("in Employee Constructor....");
    }
   getGrossSalary():number{
       return this.basicSalary+(0.05*this.basicSalary)+(0.03*this.basicSalary)+(0.1*this.basicSalary)
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
}

let employee=new Employee();


let trainer1=new Trainer(567,"Vijay Kumar",90000,800,['java','angular','typescript']);  
console.log(trainer1);

let trainer2=new Trainer(123,"Rahul Kashyap", 78000,1000,['c#','python','typescript']);  
console.log(trainer2);

let trainer3=new Trainer();

