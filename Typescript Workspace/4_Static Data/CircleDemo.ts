class Circle{
    static readonly pie=3.142; // readonly static pie=3.142 : wrong sequence
    constructor(public readonly radius=0){
    }
    static{
      //  Circle.pie=3.14;
    }
    getArea(){
        return Circle.pie*this.radius*this.radius
       
    }
}
let circle1=new Circle(10)
//circle1.radius=67;
let circle2=new Circle(12)
//circle2.radius=13;