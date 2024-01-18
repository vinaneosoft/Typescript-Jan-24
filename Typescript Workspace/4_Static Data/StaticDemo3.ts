// equalShapes method compare area of 2 Circle objects
// if area is equal then it must return true else false

class Circle{
    static readonly pie=3.142; 
    constructor(public readonly radius=0){
    }
    private getArea(){
        return Circle.pie*this.radius*this.radius
    }
    static equalShapes(circle1:Circle,circle2:Circle):boolean{
        if(circle1.getArea()===circle2.getArea())
            return true;
        else 
            return false;
    }
}
let circle1=new Circle(4);
let circle2=new Circle(4);
let circle3=new Circle(6);

Circle.equalShapes(circle1,circle2);