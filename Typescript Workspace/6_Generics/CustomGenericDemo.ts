class NeoEmployee<E>{
    employeeId:E
    employeeName:string ;
    // not set get properties. these are functions written to show typesafety
    getEmployeeId():E{
        return this.employeeId
    }
    setEmployeeId(employeeId:E):void{
        this.employeeId=employeeId
    }
}

let employee1=new NeoEmployee<string>();
employee1.employeeId="890";
employee1.employeeName="hari"
//employee1.employeeId=567;
console.log(employee1.getEmployeeId());
let employee2=new NeoEmployee<number>();
employee2.employeeId=888;
employee2.employeeName="poonam"
//employee2.employeeId="777";
console.log(employee2.getEmployeeId());
employee1.setEmployeeId("1222222");
employee2.setEmployeeId(556);

let employee3=new NeoEmployee();
employee3.employeeId=1233;
employee3.employeeId="5h5666";

