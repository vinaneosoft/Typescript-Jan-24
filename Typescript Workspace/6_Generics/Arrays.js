var salaryArray;
salaryArray = new Array(); // primitives as well as wrappers allowed
var salaries = new Array();
console.log(salaries.length);
console.log(salaries);
salaries[0] = 45000;
console.log(salaries);
console.log(salaries.length);
salaries.push(78000); //push(...items: number[]): number
salaries.push(78000, 670000, 450000, 23111, 23777, 89500, 78400);
console.log(salaries);
//salaries.push("hi");
//salaries.push(true);
//salaries.push(new Number(67));
salaries[0] = 34000;
salaries.pop(); //pop(): number | undefined
console.log(salaries);
var empNames = ["Kripa", "Krishna", "Mayur", 'Padma'];
empNames.push("Rita"); //push(...items: string[]): number
empNames.pop(); //.pop(): string | undefined
console.log(empNames);
/* push(...items:T[]):number{
    //logic
}
pop():T | undefined{
    //logic
}


*/ 
