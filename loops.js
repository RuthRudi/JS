/*let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
};

//do while
let a = 0;
do {
  console.log( a );
  a++;
} while (a < 3);

//for loop

for(let b = 0; b<3; b++){
    console.log(b)
}

let fruits =['apple','banan', 'grapes', 'mango']

function printItems (array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

printItems(fruits)


function newFruit(array){
    let newArray =[];
    for(let i = 0; i < array.length; i++){
        newArray.unshift(array[i])
    }
    return newArray
}

let results = newFruit(fruits);
console.log(results);
*/
//for of loop

let fruits =[ 'apple', 'mango', 'grapes']
//for (const fruit of fruitts) {
  //  console.log(fruit);
//}

function newFruit(array){
    let newArray =[];
    for(const fruit of fruits){
        newArray.unshift(fruit)
    }
    return newArray
}

let results = newFruit(fruits);
console.log(results);