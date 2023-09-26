// Global scope

var  city = 'Chicago'
const state = 'IL'
let = country = 'US'

console.log(city);
console.log(state);
console.log(country);

if(true){
    console.log(city)
}

// Function scope

function sum (arr){
    let total = 0; // belongs to sum function 
    for(const number of arr){
        total += number
    }
    return total
}
console.log(sum([1, 2, 3])) // 6
console.log(total) // ReferenceError: total is not defined

// Local scope

{
    var num1 = 1;
    let num2 = 2;
    const num3 = 3;
}

console.log(num1) // 1
console.log(num2) // ReferenceError: num2 is not defined
console.log(num3) // ReferenceError: num3 is not defined

// Lexical scope: nested functions 

function outer(){
    let outerVariable = 'OUTER'
    function inner(){
        let innerVariable = 'INNER'
        console.log(outerVariable)
        console.log(innerVariable)
    }
    console.log(outerVariable)
    console.log(innerVariable)
}

    outer(); // OUTER
    inner(); // ReferenceError: innerVariable is not defined



// Closure


function score() {
    let initialScore = 0;
const inner = function(){
    return initialScore += 1
};
    return inner;
}

const anyFunction = score();

console.log(anyFunction());
console.log(anyFunction());
console.log(anyFunction());
console.log(anyFunction());
