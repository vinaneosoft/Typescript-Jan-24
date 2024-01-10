var companyName:string ;  // strictly typed lang
 //companyName=890;  //incompatible value
companyName="NEOSOFT"
//companyName=true; 
console.log(companyName);

let salary:number;
salary=78000;

let marriedStatus:boolean
marriedStatus=true;

let employeeId:any
employeeId=890;
employeeId="e890";

let ss : string | number;

let branch="Rabale";

//branch=8999;

let contactNumber;contactNumber=7878787878;

let headoffice;
headoffice="Dadar";
console.log((<string>headoffice).length);
console.log(headoffice.charAt(0));

let sss:string;
sss="hello";

let employee={
    id:567,
    name:"hari",
    salary:78000
}
console.log(employee.id);
console.log(employee.name);
console.log(employee.salary);

for(let key in employee){
    console.log(key);
    console.log(employee[key]);
    
}
// Symbol
//*


function add(num1:number,num2:number):number
{
    console.log(num1+num2);
    return num1+num2;
}

let res=add(45,67);
console.log(res);


function add2(num1:number,num2:number):void
{
    console.log(num1+num2);
}
