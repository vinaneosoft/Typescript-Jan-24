//
class NeoEmployee{
    employeeId:number;
    employeeName:string;
    employeeSalary:number;
    static companyName:string
    constructor(employeeId=0,employeeName="A",employeeSalary=0){
        console.log("....in NeoEmployee constructor");   
        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.employeeSalary=employeeSalary;
        //console.log(NeoEmployee.companyName);  
    }
    static{
       // this.companyName="Neosoft Tech."
       console.log("....in static block 1");
        NeoEmployee.companyName="Neosoft Tech."
    }
    static{
        console.log("....in static block 2");
    }
}

let employee1=new NeoEmployee(111,"Pavan Kumar",56000);
let employee2=new NeoEmployee(121,"Kishori Kumar",76000);
console.log("Name of 1st employee"+employee1.employeeName);

console.log("Old Name of company= "+NeoEmployee.companyName);
NeoEmployee.companyName="Neosoft";
console.log("New Name of company= "+NeoEmployee.companyName);

