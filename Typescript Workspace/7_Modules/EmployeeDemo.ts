import { Employee } from './Module1';

import {Employee as Emp} from './Module2';

let employee1=new Employee();
employee1.employeeId=80;  // scope : public
employee1.employeeName="Hari";

let emp1=new Emp();
emp1.employeeId=123;
emp1.employeeName="hhh";

//import java.awt.List; //class
//import java.util.List;  // interface

