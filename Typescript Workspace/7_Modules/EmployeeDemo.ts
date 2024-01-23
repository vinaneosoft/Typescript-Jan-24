import { Employee,Department } from './Module1';
import {Employee as Emp} from './Module2';
import NeoCompany from './Module1'; // NeoCompany == Company
import * as bank from './Module3';

console.log(bank.accountNumber);
//bank.accountNumber=56788;   // exported property values can not be changed
bank.changeAccountNumber(567888);

let employee1=new Employee();
employee1.employeeId=80;  // scope : public
employee1.employeeName="Hari";

let emp1=new Emp();
emp1.employeeId=123;
emp1.employeeName="hhh";


// create Department object and further logic


let neo=new NeoCompany();
neo.companyCode="NEO11111";

//import java.awt.List; //class
//import java.util.List;  // interface

