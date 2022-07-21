// function inside an object
const person ={
    name:"Robert",
    age:14,

    sayName: function(){
        console.log('Hello' + this.name);
    },
    sayAge: function(){
        console.log('you are' + this.age +'years old')
    }
};

person.sayName();
person.sayAge();


function viewObject(){
    console.log(this);
};

viewObject();


