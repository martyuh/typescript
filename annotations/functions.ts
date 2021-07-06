//function
//type annotation within the parameters 
//type annotation assigned to the variable to indicate the arguments that it will take and the values that it will return
//everything to the right of the = sign is the function
const add = (a:number,b:number): number => {
 return a+b; 
}
//always use return annotations
const subtract = (a:number,b:number): number => {
    return a-b; 
   }

//named function
function divide (a:number,b:number):number{
 return a/b;
}

//anonymous function assigned to a variable
const multiply = function(a:number,b:number):number{
    return a*b;
}

//void means that a function that will not return anything, returns null, or returns undefined
const logger =(message:string):void=>{
    console.log(message);
}
//never indicates that you'll never reach the end of the function
const throwError = (message:string):never =>{
    throw new Error(message)
}

const todaysWeather = {
    date: new Date(),
    weather:'sunny'
}
//annotations for object in the parameters 
const logWeather = (forecast: {date:Date;weather:string}):void =>{
    console.log(forecast.date);
    console.log(forecast.weather);
}
//annotation for destructured object  
const logsWeather = ({date,weather}:{date:Date,weather:string}):void=>{
    console.log(date);
    console.log(weather);
}

logsWeather(todaysWeather)