const drink = {
    color:'brown',
    carbonated: true,
    sugar: 40
};

//instead of having to write out the annotation for a drink every time, 
//create a type alias. it is an idea of a tuple and not an array
type Drink = [string,boolean,number]
//tuple order is important
//annotation in a specific order makes this a tuple
//const pepsi:[string,boolean,number] = ['brown',true,40];
const pepsi:Drink = ['brown',true,40];
const sprite:Drink=['clear',true,32];
const tea:Drink=['brown',false,0];

//tuples can be vague with annotation type
const carSpecs:[number,number] = [400,3354];
//objects are specific and is a much preferred data structure 
const carStats ={
    horsepower: 400,
    weight: 3354
}