const profile = {
    name: 'Alex',
    age: 20,
    coords:{
        lat: 0,
        lng: 15
    },
    setAge(age:number):void{
        this.age = age;
    }
}
//must list the structure of the object in the annotation
const {age}:{age:number} = profile;
//destructuring an embeddecd method, must annotate the structure of the embedded object
const{coords:{lat,lng}}:{coords:{lat:number,lng:number}} =profile; 