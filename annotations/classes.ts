class Vehicle {
     //annotation type assigned
     //instead of having a repetitive variable annotation and declaration use the public modifier in the parameter
    // color:string;
    //the public modifier in the parameter allows assigns the instance variable to the vehicle that is instantiated 
    constructor(public color:string){
             //instead of having a repetitive variable annotation and declaration use the public modifier in the parameter
        // this.color = color
    }

    //no return so void is the return type
    // public drive():void{
    //     console.log('what')
    // }
    //private modifier prevents child class from accessing it.
    //protected modifier allows child class to access it but it can't be accessed outside of the child class
    protected honk():void{
        console.log('honk')
    }
}

const vehicles = new Vehicle('blue');
console.log(vehicles.color);

//Car is the child class of the super class and inherits Vehicle methods by using extends
class Cars extends Vehicle{
    // do not place a modifier on a variable on a child class if it has already been assigned a modifier in the parent class 
    constructor (public wheels:number, color:string){
        // when you create a constructor method in a child class you are required to call the parent constructor method as well. To do so you call super
        super(color);
    }
    //if Cars does not have a constructor function it will automatically call the parent one
    //override a method in the parent class
    //private modifier means only methods within the class can call drive
    //cannot change modifier in child class if parent class has one
    //private prevents application breaking due to a method being called.
    private drive(){
        console.log('override')
    }
    //this method can call drive
    startDrivingProcess():void{
        this.drive();
        //cannot call honk if it is private in the parent class
        this.honk();
    }

}

//vehicle is instance of Vehicle
//because it extends vehicle and doesn't have it's own constructor function it will call the one in vehicle and that is why you must pass in a string
const coche = new Cars(3, 'blue'); 
coche.startDrivingProcess();
// coche.drive();
// coche.honk()