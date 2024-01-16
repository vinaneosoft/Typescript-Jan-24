class Employee{
  id:number
}

class Trainer extends Employee{
    epay:number
}

class Manager extends Employee{
    eallowance:number;
}
let trainer1=new Trainer();
trainer1.id=111;
trainer1.epay=800;

let manager1=new Manager();
manager1.id=222;
manager1.eallowance=4000;

let emp1=<Employee>trainer1;
console.log(emp1);
let emp2=<Employee>manager1;
console.log(emp2);
let tr1=<Manager>emp1;   // wrong cast : auto corrected
console.log(tr1);
let mgr1=<Trainer>emp2; // auto corrected
console.log(mgr1);



