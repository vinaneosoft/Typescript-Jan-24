var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        //  console.log("in Animal constructor....");
    }
    Animal.prototype.eat = function () {
        console.log("Animal eats");
    };
    return Animal;
}());
var HerbivorusAnimal = /** @class */ (function (_super) {
    __extends(HerbivorusAnimal, _super);
    function HerbivorusAnimal() {
        return _super.call(this) || this;
        // console.log("in HerbivorusAnimal constructor");
    }
    HerbivorusAnimal.prototype.eat = function () {
        console.log("Herbivorus Animals eat Veg");
    };
    return HerbivorusAnimal;
}(Animal));
var Deer = /** @class */ (function (_super) {
    __extends(Deer, _super);
    function Deer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deer.prototype.eat = function () {
        console.log("Deer eats grass");
    };
    return Deer;
}(HerbivorusAnimal));
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.eat = function () {
        console.log("Tiger eats other small Animals");
    };
    return Tiger;
}(Animal));
var animal;
// diamond operator while upcasting in not needed
animal = new HerbivorusAnimal(); // upcasting
animal.eat(); // inherited overriden method called
animal = new Tiger(); // upcasting
animal.eat();
animal = new Deer();
animal.eat();
