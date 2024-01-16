class Animal{
    constructor(){
      //  console.log("in Animal constructor....");
    }
    eat():void{
        console.log("Animal eats"); 
    }
}
class HerbivorusAnimal extends Animal{
    constructor(){
        super();
       // console.log("in HerbivorusAnimal constructor");
    }
    eat(): void {
        console.log("Herbivorus Animals eat Veg");
    }
}
class Deer extends HerbivorusAnimal{
    eat(): void {
        console.log("Deer eats grass");
    }
}
class Tiger extends Animal{
    eat(): void {
        console.log("Tiger eats other small Animals"); 
    }
}
let animal:Animal;
// diamond operator while upcasting in not needed
animal=new HerbivorusAnimal(); // upcasting
animal.eat();// inherited overriden method called

animal=new Tiger();  // upcasting
animal.eat(); 

animal=<Animal>new Deer();
animal.eat();


let tiger=new Tiger();
let deer=new Deer();



TEST(tiger)
TEST(deer);
function TEST(an:Animal){
    an.eat();
}