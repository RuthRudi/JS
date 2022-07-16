let party= (day)=>{
    if(day === "Friday"){
        return 'TGIF'
    }
    return 'No Party'
}

console.log(party('Friday'));
console.log(party('Monday'));


let division = (num1,num2) =>{
    if(num2 === 0){
        return 'Enter non-zero denominator'
    }
    return num1 /num2;
}
console.log(division(1,0));

let codeNinja = name=> `${name} is a code ninja`


console.log(codeNinja('Ruth'))