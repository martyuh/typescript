//interfaces creates a new type, describing the property names and value types of an object
//it's essentially a custom type that is defined 
//always capitalized 
interface Reportable{
    //must have these properties
    //must have these different types
        // name:string;
        // you can use more than primitive values
        // year:Date;
        // broken:boolean;
        //can also type a function, what comes after the colon is what the function returns
        summary():string;

}
const oldCivic ={
    name: 'civic',
    year: new Date(),
    broken: true,
    // annototate that the named function returns a string
    summary():string{
        return `Name: ${this.name}`
    }
}
const drinks = {
    color : 'brown',
    carbonated:true,
    sugar:40,
    // annototate that the named function returns a string
    summary():string{
        return `my drink has ${this.sugar}`
    }
}
//should always try to create functions that accept arguments that are 'typed' with interfaces
//printSummary is a reuseable function
//reportable interface is a gatekeeper to printSummary
//parameter must be annotated
//returns nothing so void
//use interface to shorten code
// const printSummary = (vehicle:{name:string,year:number,broken:boolean}):void =>{
//interface makes it so that in order to call the function you must pass in an object that meets
//the specifications of the interface
//if the function passed in satisfies the type requirements for the interface, typescript will still accept it.
    const printSummary = (item:Reportable):void =>{
    console.log(item.summary() )
   
}
//behind the scenses typescript determines if the object passed in meets the interface specs
//in order to utilize the gatekeeper interface, each object must implement the interface to work with 'some function', for example summary() is in both objects above. and summary() is typed in the Reportable interface
printSummary(oldCivic);
printSummary(drinks);