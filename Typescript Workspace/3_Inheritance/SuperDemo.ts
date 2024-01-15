class Employee{
    private employeeId=0; 
    protected employeeName="AAA";
    basicSalary=0

    constructor(){
        console.log("in Employee Constructor....");
    }

   getGrossSalary():number{
       // TA: 5%, DA 3% HRA  10%
       return this.basicSalary+(0.05*this.basicSalary)+(0.03*this.basicSalary)+(0.1*this.basicSalary)
   }
}
// subclass directly inherits visible properties of superclass
class Trainer extends Employee{
    extraPay=0; 
    trainingTopics:string[]=[];
    constructor(){
       // this.extraPay=78;   // this not allowed b4 super constructor call
        super(); // 0-p superclass constructor
        console.log("in Trainer constructor");
        
    }
   addTopics(topic:string):number{
       this.trainingTopics.push(topic);
       return this.trainingTopics.length;
   }
  
}// subclass body ended here // protected scope of super class ended here
//1. superclass 2. subclass 
let trainer1=new Trainer();  // call automalically goes to super class constructor and then subclass constructor
console.log(trainer1);

