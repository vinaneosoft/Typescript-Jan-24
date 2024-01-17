//
class NeoEmployee {
    employeeId: number;
    employeeName: string;
    employeeSalary: number;
    static companyName: string
    private static employeeCount:number;
    constructor(employeeId = 0, employeeName = "A", employeeSalary = 0) {
        console.log("....in NeoEmployee constructor");
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
        NeoEmployee.employeeCount++;
    }
    static {
        // this.companyName="Neosoft Tech."
        console.log("....in static block 1");
        NeoEmployee.companyName = "Neosoft Tech."
    }
    static {
        console.log("....in static block 2");
        NeoEmployee.employeeCount=0;
    }
    static getEmployeeCount():number{
        return NeoEmployee.employeeCount;
    }
}
console.log("Count:"+NeoEmployee.getEmployeeCount());
let employee1 = new NeoEmployee(111, "Pavan Kumar", 56000);
console.log("Count:"+NeoEmployee.getEmployeeCount());
let employee2 = new NeoEmployee(121, "Kishori Kumar", 76000);
console.log("Count:"+NeoEmployee.getEmployeeCount());
console.log("Name of 1st employee" + employee1.employeeName);
console.log("Old Name of company= " + NeoEmployee.companyName);
NeoEmployee.companyName = "Neosoft";
console.log("New Name of company= " + NeoEmployee.companyName);
let employee3=employee1; 
console.log("Count:"+NeoEmployee.getEmployeeCount());
console.log(employee3.employeeId+"  "+employee1.employeeId);
console.log(employee3==employee1);
console.log(employee1==employee2);

employee1.employeeName="Pradeep"
console.log(employee3.employeeName);


