interface EmployeeIntf<T>{
    employeeId:T;
    employeeName:string;
    employeeSalary:number;
    getGrossSalary():number;   // function declaration // no impl
    departmentId?:string;  // optional
    getNetSalary?():number; // optional
}
class SquadEmployee implements EmployeeIntf<string>{
    employeeId:string;
    employeeName:string;
    employeeSalary:number;
    squadIncentives:number;  
    getGrossSalary():number{
        console.log("SQUAD");  
        return this.employeeSalary+
        (0.05*this.employeeSalary)+
        (0.03*this.employeeSalary)+
        (0.1*this.employeeSalary)+
        this.squadIncentives
    }
    getNetSalary():number{
        return this.getGrossSalary()-500;
    }
}
class CoderEmployee implements EmployeeIntf<number>{
    employeeId:number;
    employeeName:string;
    employeeSalary:number;
    coderIncentives:number;
    getGrossSalary():number{
        console.log("CODER");  
        return this.employeeSalary+
        (0.05*this.employeeSalary)+
        (0.03*this.employeeSalary)+
        (0.1*this.employeeSalary)+
        this.coderIncentives;
    }
}

let coder1=new CoderEmployee();
coder1.employeeId=678;
coder1.employeeSalary=67000;
coder1.coderIncentives=5000;
let coder2=new CoderEmployee();
coder2.employeeId=890;
coder2.employeeSalary=67000;
coder2.coderIncentives=5000;

let squad1=new SquadEmployee();
squad1.employeeId="567";
squad1.employeeSalary=67000;
squad1.squadIncentives=8000;
let squad2=new SquadEmployee();
squad2.employeeId="577";
squad2.employeeSalary=67000;
squad2.squadIncentives=8000;

calculateGross(coder1);
calculateGross(squad1);
function calculateGross(employee:EmployeeIntf<string|number>){
  console.log(employee.getGrossSalary());
}