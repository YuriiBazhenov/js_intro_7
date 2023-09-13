/*
Task 1
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
*/

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
}


/*
Task 2
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
*/

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
}


/*
Task 3
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
*/

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i);
}

/*
Task 4
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
*/

for (let i = 0; i <= 7; i++) {
    console.log(`The square of 0 is ${i ** 2}`);
}


/*
Task 5
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
*/

let num = 0;

for (i = 1; i <= 10; i++) {
    num += i;
}
console.log(num);


/*
Task 6
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
*/

let n = Math.floor(Math.random() * 11)
for (let i = n; i > 1; i--) {
    n *= (i - 1)
}

console.log(n);

/*
Task 7
Requirement:
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
*/

let ranNum = 1;
let attempts = 0;

while (ranNum % 5 !== 0) {

    ranNum = Math.floor(Math.random() * 101);
    attempts++;


}
console.log(`The random number is ${ranNum} and it took ${attempts} attempt/s to generte it`);


/*
Task 8
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
*/

const aray_countries = ['Germany', 'Argentina', 'Ukraine', 'Romania']
console.log(aray_countries);
console.log(aray_countries.sort());

const array_cartoon_cats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];


/*
Task 9
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
*/

const array_cartoon = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']
console.log(array_cartoon);
console.log(array_cartoon.includes('Pluto'));


/*
Task 10
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
*/

console.log(array_cartoon_cats.sort());
console.log(array_cartoon_cats.includes('Garfield' && 'Felix'));

/* 
Task 11
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
*/


const array_numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(array_numbers);
console.log(array_numbers.join('\n'));


/* 
Task 12
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
*/

const names = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

let count = 0;
let counter1 = 0;

for (const name of names) {
    if (name[0].toLowerCase() === 'p' || name[0].toLowerCase() === 'b') count++;
    if (name.toLowerCase().includes('book') || name.toLowerCase().includes('pen')) counter1++;;
}
console.log(`Elements starting with 'B' or 'P' = ${count}`);
console.log(`Elements having 'book' or 'pen' = ${counter1}`);

/*
Task 13
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
*/


const numbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
count = 0;
let counter = 0;
let counteR = 0;
for (const number of numbers) {
    if (number > 10) count++;
    else if (number < 10) counter++;
    else if (number === 10) counteR++;
}
console.log(`Elements that are more than 10 = ${count}`);
console.log(`Elements that are less than 10 = ${counteR}`);
console.log(`Elements that are 10 = ${counteR}`);


/*
Task 14
Requirement:
-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
*/


const firstArray = [5, 8, 13, 1, 2];
const secondArray = [9, 3, 67, 1, 0];

const thirdArray = [];

for (i = 0; i < firstArray.length; i++) {
    thirdArray.push(Math.max(firstArray[i], secondArray[i]))
}
console.log(`1st array is = [ ${firstArray} ]`);
console.log(`2nd array is = [ ${secondArray} ]`);
console.log(`3rd aaray is [ ${thirdArray} ]`);

/* 
Task 15
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
*/

function firstDuplicate(x) {
    let firstDuplicate1 = null;
    for (let i = 0; i < x.length; i++) {
        let duplicate = x[i]
        let rest = x.slice(i + 1)
        if (rest.includes(duplicate)) {
            firstDuplicate1 = duplicate;
            break;
        }
    }
    if (firstDuplicate1 === null) return -1
    else return firstDuplicate1;
}


console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([12]));


/*
Task 16
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]
*/


function getDuplicates(x) {
    let duplicates = [];
    for (let i = 0; i < x.length; i++) {
        let duplicate = x[i];
        let rest = x.slice(i + 1)
        if (rest.includes(duplicate)) {
            if (!duplicates.includes(duplicate))
                duplicates.push(duplicate);

        }
    }
    return duplicates;
}



console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));


/*
Task 17
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
*/

function reverseStringWords(string) {

    const word = string.split(" ");

    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].split("").reverse().join("");
    }
    const word1 = word.join(" ");

    return word1;
}
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("Hello World JavaScript"));


/*
Task 18
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.
*/



function getEvens(x, y) {
    let even = [];
    for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {

        if (i % 2 === 0)
            even.push(i);

    }
    return even;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));



/*
Task 19
Write a function named as getMultipleOf5() which takes 2
number arguments and returns all the numbers divisible by 5
as an array stored from first found match to last found match
when invoked.
NOTE: Make your code dynamic that works for any numbers
and return empty array if there are no numbers divisible by 5
in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(x, y) {
    let even = [];
    for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
        if (i % 5 === 0)
            even.push(i);
    }
    if (x > y)
        return even.reverse();

    else return even;
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));



/*
Task 20
Write a function named as fizzBuzz() which takes 2 number
arguments and returns a string composed with below
requirements when invoked.
•You need to find all the numbers within the range of given 2
numbers (both inclusive) and store them in a string from
smallest to greatest number with a ' | ' separator for each
number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5
to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> 13 | 14 | FizzBuzz | 16 | 17 | Fizz
fizzBuzz(12, 5) -> Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz
fizzBuzz(5, 5) -> Buzz
fizzBuzz(9, 6) -> Fizz | 7 | 8 | Fizz
*/

function fizzBuzz(x, y) {
    let array = [];
    for (i = Math.min(x, y); i <= Math.max(x, y); i++) {
        if (i % 15 === 0) array.push('FiizBuzz')
        else if (i % 3 === 0) array.push('Fiiz')
        else if (i % 5 === 0) array.push('Fiiz')
        else array.push(i)
    }
    return array.join(' | ');

}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(9, 6));


