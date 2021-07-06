//variable declaration with a type annotation
//colon and the word is the type annotation
//syntax indicates that the value of type 'number, string, boolean, etc..., is the only type that can be assigned to apple
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in nobjects;
let now: Date = new Date();

//array 
//indicates that it will be an array with nothing but string,number,boolean,etc... elements inside of it.
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false];

//classes
class Car {

}
//variable car is referring only to an instance of Car
let car: Car = new Car();

//object literal
//assign a type annotation to indicate the property by listing the name and type inside curly braces, use a semicolon to separate the names and types
//essentially the structure of the object
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

//function
//type annotation within the parameters 
//type annotation assigned to the variable to indicate the arguments that it will take and the values that it will return
//everything to the right of the = sign is the function, to the left is the description of the function
const logNumber: (i: number) => void = (i: number) => {
    //type inference will only work with the return value of a function
    console.log(i)
}

//inference
//if everything is on one line inference will assign the type

//WHEN TO USE ANNOTATIONS instead of relying on inference
//1)Functions that return the any type
//any type is when the function returns various types of value, JSON.parse is a perfect example due to it receiving any sort of string
//it's normally a good thing to avoid
//one way to fix it is to add in a type annotation for the variable
const json = '{"x":10,"y":20}';
//coordinates type annotation will be an object
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

//2)When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// separate from initialization
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') foundWord = true;
}

//3) Variables whose type cannot be inferred correctly
let numbers = [-20, -1, 12];
// boolean or number 
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0)
        //number
        numberAboveZero = numbers[i]
}
