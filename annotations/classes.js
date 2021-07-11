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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        //initialize with an initial value
        this.color = 'red';
    }
    //no return so void is the return type
    // public drive():void{
    //     console.log('what')
    // }
    //private modifier prevents child class from accessing it.
    //protected modifier allows child class to access it but it can't be accessed outside of the child class
    Vehicle.prototype.honk = function () {
        console.log('honk');
    };
    return Vehicle;
}());
var vehicles = new Vehicle();
console.log(vehicles.color);
//Car is the child class of the super class and inherits Vehicle methods by using extends
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //override a method in the parent class
    //private modifier means only methods within the class can call drive
    //cannot change modifier in child class if parent class has one
    //private prevents application breaking due to a method being called.
    Cars.prototype.drive = function () {
        console.log('override');
    };
    //this method can call drive
    Cars.prototype.startDrivingProcess = function () {
        this.drive();
        //cannot call honk if it is private in the parent class
        this.honk();
    };
    return Cars;
}(Vehicle));
//vehicle is instance of Vehicle
var coche = new Cars();
coche.startDrivingProcess();
// coche.drive();
// coche.honk()
