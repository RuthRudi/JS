/*function subtraction(num1, num2){
   var result= num2 - num1
return result
}

console.log(subtraction(20, 30));

function multiplication(num1, num2){
 return num1*num2

}
var results = multiplication(10, 20);
console.log(results)


function division(num1, num2){
    return num1/num2

}

var result2 = division(50, 2);
console.log(result2)*/

function firstFunction(){
  
    var a ="Finding Fanny";

    console.log(a);
}

firstFunction();

(function() {
    var a = b = 5;
   })();
   console.log(b);

   function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
   
    function foo() {
    return 2;
    }
   }
   test();

   function repeat(times) {
    var str = '';
    for (var i = 0; i < times; i++) {
       str += this;
    }
    return str;
 };