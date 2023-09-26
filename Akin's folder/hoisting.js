

// hoisting


console.log(name) // ReferenceError: Cannot access 'name' before initialization
let name = "John"


console.log(name1) // undefined
var name1 = "Jose"



console.log(sum(5, 6))
function sum(a, b){
    return a + b
}

// Function expression or arrow functions

myFunction1() // ReferenceError: Cannot access 'myFunction1' before initialization
const myFunction1 = function (){
    console.log('FUNCTION 1')
}
myFunction2() // ReferenceError: Cannot access 'myFunction2' before initialization
const myFunction2 = () => console.log('FUNCTION 2')

