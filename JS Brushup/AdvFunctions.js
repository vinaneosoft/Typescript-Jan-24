

let addFun=(num1,num2)=>console.log(num1+num2);


let cubeFun=num=>num*num*num;

console.log(cubeFun(2));


let employees=["Amol",'aruna','Komal','RamP','Arnavi',"Rajamp", 'Anup'];

employees.forEach(emp=>console.log(emp)); //1.
employees.forEach((emp,index)=>console.log(emp+" "+index));
employees.forEach((emp,index, ref)=>console.log(emp+" "+index+" "+ref));

let filterdEmployees=employees.filter(emp=>emp.toUpperCase().startsWith('A')) // matcing elements will get automatically pushed in new aray
//['Amol','aruna','Arnavi','Anup']
console.log(filterdEmployees);

let found=employees.find(emp=>emp.toUpperCase().endsWith('P'))
console.log(found);

let salaries=[95000,67000,78000,98000,130000]
let filteredSalaries=salaries.filter(salary=>salary>78000);
console.log(filteredSalaries);

let sum=salaries.reduce((accumulator,salary)=>accumulator+salary)
//sum=95000 (1st ele of array),  salary=67000 (2nd ele of array) sum=95000+67000 sum=162000
//salary=78000 sum=162000+78000
console.log(sum);


let sum2=salaries.reduce((accumulator,salary)=>accumulator+salary,1000)
//sum=1000,  salary=95000 (1st ele of array) sum=1000+95000 sum=96000
//salary=78000 sum=96000+78000
console.log(sum2);


// map function
employees=["Amol",'aruna','Komal','RamP','Arnavi',"Rajamp", 'Anup'];
let mappedEmployees=employees.map(emp=>emp.toLowerCase());
console.log(employees);
console.log(mappedEmployees);

salaries=[95000,67000,78000,98000,130000]
//increment everysalary by 10000
let newsalaries= salaries.map(sal=>sal+10000)
console.log(salaries);
console.log(newsalaries);

//increment salary>78000 by 10000 
salaries.filter(sal=>sal>78000).map(sal=>sal+10000).forEach(sal=>console.log(sal));
