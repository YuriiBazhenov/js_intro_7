

/*
Find if product of 2 random numbers is odd or not. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the product of the random numbers is odd, print true. 
Otherwise, print false.
*/


let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let num3 = (num1 * num2)
console.log(num3 % 2 !== 0);

/*
Find the smallest number between 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it.
*/

let num01 = Math.floor((Math.random() * 10) + 1);
let num02 = Math.floor((Math.random() * 10) + 1);
let num03 = Math.floor((Math.random() * 10) + 1);
console.log(Math.min(num01, num02, num03));



/*
Write a code that generates a random number between 0 and 6 (both inclusive)
0 represents Sunday
1 represents Monday
.
.
.
.
6 represents Saturday


0 -> print "RED"
6 -> print "GREEN"
1,2,3,4,5 -> print "BLACK"

If it is weekend -> "VACATION"
if it is weekday -> "WORK"

0 -> RED\nVACATION
6 -> GREEN\nVACATION
1,2,3,4,5 -> BLACK\nWORK
*/

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

console.log(getRandomNumber(0, 6));

let n1 = getRandomNumber(0, 6);
console.log(n1);
if (n1 === 0) {
    console.log("RED\nVACATION");
}
else if (n1 === 6) {
    console.log("GREEN\nVACATION");
}
else {
    console.log("BLACK\nWORK");
}



/*
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it. 
1st quarter is 1-25 
2nd quarter is 26-50 
3rd quarter is 51-75 
4th quarter is 76-100
*/

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
let n01 = getRandomNumber(1, 100);
console.log(n01);

if (n01 <= 25) {
    console.log("1st quarter is 1-25");
}
else if (n01 <= 50) {
    console.log("2nd quarter is 26-50");
}
else if (n01 <= 75) {
    console.log("3rd quarter is 51-75");
}
else {
    console.log("4th quarter is 76-100");
}



let str1 = "John"
console.log(str1.slice(0, 2));


/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
*/



function firstTwoCharacters(str) {
    return str.slice(0, 2)
}
console.log(firstTwoCharacters("Tech"))

/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function lastTwoCharacters(text) {
    return text.slice(text.length - 2);

}
console.log(lastTwoCharacters("Banana"));

/*
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word.
*/

function doubleWord(word) {
    return word + word
}
console.log(doubleWord("Tech"));


let nuM1 = Math.floor(Math.random() * (star - end + 1) + start);


/*
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit. 
Convert miles unit to kilometers and print it. 
Please assume that 1 mile equals 1.6 kilometers.
*/

let int = Math.floor(Math.random() * 10) + 1
console.log(int);
function miles(int) {
    return (int * 1.6)
}
console.log(miles(int));


// Class_Practice04

/*
Task - 1
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100
*/


let num = 25;

if (num <= 25) console.log(`${num} 1st quarter is 1-25\n1st half is 1-50`);
else if (num <= 50) console.log(`${num} 2nd quarter is 26-50\n1st half is 1-50`);
else if (num <= 75) console.log(`${num} 3rd quarter is 51-75\n2nd half is 51-100`);
else console.log(`${num} 4th quarter is 76-100\n2nd half is 51-100`)




/*
Task - 2
Assume you are given 2 numbers to be 0 or 1.
Print true if they are same number.
Otherwise, print false
*/

let var1 = 1, var2 = 1;

console.log(var1 === var2);



/*
Task - 3
Assume you are given 3 numbers between 1 and 100 
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
*/

let var3 = 10, var4 = 10, var5 = 10;
console.log(var3 % 2 === 0 && var4 % 2 === 0 && var5 % 2 === 0);


/*
Task - 4
Assume you are given a single character.
Find if the given character is a letter or digit.
*/

let char = "5";
let var7 = char.charCodeAt(0);

if (var7 >= 65 && var7 <= 95 || var7 >= 97 && 122) console.log(`${char} is a letter`);
else if (var7 >= 48 && var7 <= 57) console.log(`${char} is a digit`);


/*
Task - 5
Assume you are given a single character.
Find if the given character is a lowercase or an 
uppercase letter.
NOTE: if the character is not a letter, print "INVALID 
INPUT"
*/

let char1 = "S";
let var8 = char1.charCodeAt(0);

if (var8 >= 65 && var8 <= 95) console.log(`${var8} is a lowercase letter`);
else if (var8 >= 97 && var8 <= 122) console.log(`${var8} is a uppercase letter`);
else console.log("INVALID NUMBER");


/*
Task - 6
Assume you are given a single character.
Find if the given character is a special character or not.
*/

let char2 = "A";
let var9 = char2.charCodeAt(0);


if (var9 !== 32 && !(var9 >= 48 && var9 <= 57) && !(var9 >= 65 && var9 <= 95) && !(var8 >= 97 && var8 <= 122)) {
    console.log(`${char2} is a special character`);
}
else {
    console.log(`${char2} is not a special character`);
}

/*
Task - 7
Assume you are given a single character.
Find if the given character is a vowel or not.
NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/






let char4 = "U";
let var11 = char4.charCodeAt(0);

if ((var11 >= 65 && var11 <= 95) || (var11 >= 97 && var11 <= 122)) console.log(`${char4} is a letter`);
else if ("aeiouAEIOU".includes(char4)) console.log(`${char4} is a vowel`);
else console.log("INVALID INPUT")








/*
Task - 8
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.
*/

let char3 = "K";
let var10 = char3.charCodeAt(0);

if (var10 === 32) console.log(`${char3} is a whitespace`); // " " is a space
else if (var10 >= 48 && var10 <= 57) console.log(`${char3} is a digit`); // "5" is a digit
else if ((var10 >= 65 && var10 <= 90) || (var10 >= 97 && var10 <= 122)) console.log(`${char3} is a letter`); // "a", "A" is a letter
else console.log(`${char3} is a special character`); // "$" is a special character



let string1 = "Felka"
console.log(string1.toUpperCase().includes("A"));

let string2 = "ALELEKA"
console.log("aeiouAEIOU".startsWith(string2.toUpperCase()));


let ranNum = Math.floor(Math.random() * 10) + 1;
console.log(ranNum);
console.log(ranNum % 2 === 1);



function firstTwoCharacters(string) {
    return string.slice(0, 2)
}
console.log(firstTwoCharacters("Tech"));



/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
*/

let str = "JavaScript"

console.log(str.slice(str.length / 2 - 1, str.length / 2 + 1));

/*
Generate a random number in any range till you got a 7.
*/


let i = Math.floor(Math.random() * 11);

while (i <= 7) {
    console.log(i);
    i++
}



/*
Output all the odd numbers from 1 to Random Number (both inclusive) -> 1 3 5 7 9
*/

let rn = Math.floor(Math.random() * 11);
for (i = 1; i <= rn; i++) {
    if (i % 2 === 1) console.log(i);
}


let randomNumber = Math.floor(Math.random() * 101);
let attempts = 0;
do {
    randomNumber
    attempts++;

} while (randomNumber % 5 === 0);

console.log(`The random number is ${randomNumber} and it took 
    ${attempts} attempt/s to generate it.`);

//
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



/*
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/
const firstArray = [5, 8, 13, 1, 2];
const secondArray = [9, 3, 67, 1, 0];
thirdArray = [];

for (let i = 0; i < firstArray.length; i++) {
    thirdArray.push(Math.max(firstArray[i], secondArray[i]));
}
console.log(thirdArray);



const numbers = [3, 4, 7, 3, 2, 2, 7];
let sum = 0;
//Find the average of these numbers -> 4

for (const number of numbers) {
    sum += number;
}
console.log(sum / numbers.length);

/*
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers from the first 2 arrays and output the third array as well.
[ 45, 24, 10, 1, 0 ]
*/

const firstArray1 = [5, 8, 2, 1, 2];
const secondArray1 = [9, 3, 5, 1, 0];
const thirdArray1 = [];

for (i = 0; i <= firstArray1.length - 1; i++) {
    thirdArray1.push(firstArray1[i] * secondArray1[i]);
}
console.log(thirdArray1);


/*
Please find the first even number from the below array
[1, 3, 0, 2, 6, 8] -> 0
*/

const numbers1 = [1, 3, 0, 2, 6, 8]

let evenNum = null;
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        evenNum = numbers1[i];
        break
    }
}
console.log(evenNum);

/*
How to reverse a string
// John     -> nhoJ
let name = 'John';
let reversedName = '';
console.log(reversedName); // nhoJ
*/


let name = 'Hello World';
let reversedName = '';

for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i]
}
console.log(reversedName);

/*
/ Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
*/


const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

for (const city of cities) {
    if (city.length % 2 !== 0) console.log(city);
}

/*
Write a program that generates a random number between 1 to 50 (both inclusive)
Continue generating the number till you get a random number divisible 10
*/

let number1 = 5;
let attempts1 = 1;
let rn1 = randomNumber5 = Math.floor(Math.random() * 11)
while (number1 !== randomNumber5) {
    randomNumber5 = Math.floor(Math.random() * 11)
    number = 5;
    attempts1++;
}
console.log(number1, attempts1);

/* 
Print names 
*/
const names = ['Yurii', 'Alex', 'Peter', 'Joe', ' Max', 'David'];
const longNames = [];

for (const name of names) {
    if (name.length < 5) longNames.push(name);
}
console.log(longNames);