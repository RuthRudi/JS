/*function Person (name, age, weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.sayName= function() {
        console.log('Hello' +" " + this.name);
    }
}

const ruth =new Person("Ruth", 20, 50);


console.log(ruth);

ruth.sayName();



//object constructor of a car

function Car (brand, model, year, color){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.inFo= function() {
        console.log('These are the details of this car - Brand:' +" " + this.brand +", "  + "Model: " + this.model +", "  + "Year: " + this.year +", " + "Color: " + this.color);
    }
}

const bentley =new Car("Bentley", "CONTINENTAL GTC",2003,"red");

console.log(bentley);
bentley.inFo();
*/

//classes


class Car{
    constructor(brand, model, color, year){
        this.brand = brand;
        this.model = model;
        this.color = color; 
        this.year = year;
     
    }

    info(){
        console.log(`This is a ${this.color} ${this.brand} ${this.model}`)
    }

    start(){
        console.log('Engine Start');
    }
    stop(){
        console.log('Engine Stop');
    }
}

const newCar = new Car("Lexus", "ES-350", "Grey", 2020);

newCar.info();
newCar.start();
newCar.stop();
//console.log(newCar);