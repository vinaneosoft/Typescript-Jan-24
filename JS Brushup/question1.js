
let employees=["Amol",'aruna','Komal','RamP','Arnavi',"Rajamp", 'Anup'];


let startsWithA=[];
for(let employee of employees){
    if(employee.toLowerCase().startsWith('a'))
        startsWithA.push(employee);
}
console.log("Employees starting with A/a ",startsWithA);

let endsWithP="";
for(let employee of employees){
    if(employee.toLowerCase().endsWith('p')){
        endsWithP=employee;
        break;
    }
}
console.log("Employees ending with P/p ",endsWithP);
