interface EmployeeIntf{
    employeeId:number;
    employeeName:string;
    employeeSalary:number;
    getGrossSalary():number;   // function declaration // no impl
    departmentId?:string;  // optional
    getNetSalary?():number; // optional
}


class SquadEmployee implements EmployeeIntf{
    employeeId:number;
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


class CoderEmployee implements EmployeeIntf{
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

let coder=new CoderEmployee();
coder.employeeSalary=67000;
coder.coderIncentives=5000;

let squad=new SquadEmployee();
squad.employeeSalary=67000;
squad.squadIncentives=8000;

calculateGross(coder);
calculateGross(squad);
function calculateGross(employee:EmployeeIntf){
  console.log(employee.getGrossSalary());
    
}