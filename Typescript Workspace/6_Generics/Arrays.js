let salaryArray;
salaryArray = new Array(); // primitives as well as wrappers allowed
let salaries = new Array();
console.log(salaries.length);
console.log(salaries);
salaries[0] = 45000; // indexed collection
console.log(salaries);
console.log(salaries.length);
salaries.push(78000); //push(...items: number[]): number
salaries.push(78000, 67000, 45000, 23111, 23777, 89500, 78400, 210000, 4500);
console.log(salaries);
//salaries.push("hi");
//salaries.push(true);
//salaries.push(new Number(67));
salaries[0] = 34000;
//salaries.pop();  //pop(): number | undefined
console.log(salaries);
salaries.sort();
console.log(salaries);
salaries.sort((a, b) => a - b);
console.log(salaries);
let empNames = ["Zahida", "Kripa", "krishna", "Mayur", 'Padma'];
empNames.push("Rita"); //push(...items: string[]): number
empNames.pop(); //.pop(): string | undefined
console.log(empNames);
empNames.sort(); // mutable
console.log(empNames);
//empNames.push(new String("hi"));
/* push(...items:T[]):number{
    //logic
}
pop():T | undefined{
    //logic
}


*/
let cities = new Array();
cities.push("Thane");
cities.push("Thane");
cities.push(new String("Solapur"));
console.log(cities);
console.log(typeof cities);
let itr = cities.entries(); // iterable object
/* console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next()); */
let entry;
do {
    entry = itr.next();
    if (entry.done === false)
        console.log(entry.value);
} while (entry.done === false);
