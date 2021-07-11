const carMakers:string[] =['ford','toyota','chevy'];
const dates = [new Date(),new Date()];
//annotation for nested array
const carsByMake: string[][] = [
    ['f150'],['corolla'],['camaro']
]

//help with inference when extracting values 
const cars =carMakers[0];
const myCars = carMakers.pop();

//prevent incompatible values
//error thrown
carMakers.push(100);

//help with map
carMakers.map((cars:string):string=> cars)

//flexible types
const importantDates:(string|Date)[] = [new Date(),'2030-10-10'];

//a 'tuple' is an array like structure where each element represents some property of a record
//data is usually mixed and matched in a tuple
