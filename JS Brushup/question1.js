
let employees=["Amol",'aruna','Komal','RamP','Arnavi',"Rajamp", 'Anup'];

let endsWithP="";
for(let employee of employees){
    if(employee.toLowerCase().endsWith('p')){
        endsWithP=employee;
        break;
    }
}
console.log("Employees starting with A/a ",endsWithP);
