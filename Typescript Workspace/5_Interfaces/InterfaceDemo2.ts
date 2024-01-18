interface FatherIntf{
    dream():string;
  //  hobby():string;
}
interface MotherIntf{
    dream():string

   
}
// one interface can extend many interfaces
interface ChildIntf extends FatherIntf,MotherIntf{
    goal():string;
}
// one class can implement many interfaces
class Child implements FatherIntf,MotherIntf{
    dream(): string {
        throw new Error("Method not implemented.");
    }
  //3,2,1
}

class Child2 implements ChildIntf{
    goal(): string {
        throw new Error("Method not implemented.");
    }
    dream(): string {
        throw new Error("Method not implemented.");
    }
    // 3,2,1
}


class Employee{

}

class SquadEmployee extends Employee implements ChildIntf{
    goal(): string {
        throw new Error("Method not implemented.");
    }
    dream(): string {
        throw new Error("Method not implemented.");
    }

}