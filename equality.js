

console.log(10 === '10')
console.log(10 == '10')


console.log(10 !== '10')
console.log(10 != '10')


console.log([] == false); // true
console.log([] === false); // false



if ([]) {
    console.log('pass!')
}


if ({}) console.log('true');


//


const multiply = (num) => num.map(number => number * 2)

console.log(multiply([1, 2, 3]));

const add = (num) => num.map(number => number +1)
console.log(add([1, 2, 3]));


const divisible = (num) => num.map(number => number / 2);

console.log(divisible([1, 2, 3]));

const decrement = (num) => num.map(number => number - 2);

console.log(decrement([1, 2, 3]));


