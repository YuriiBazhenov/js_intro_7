/*
Find if a number is even or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
2   -> true 
5   -> false 
10   -> true
*/


function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let n1 = getRandomNumber(0, 10);
console.log(n1 % 2 === 0);


/*
Find if a number is odd or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true. 
Otherwise, print false. 
 
Examples: 
1   -> true 
2   -> false 
5   -> true 
10   -> false
*/

let n2 = getRandomNumber(1, 10);
console.log(n2 % 2 === 1);


/*
Find if a number is positive or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> false 
-1   -> false 
0   -> false 
1   -> true 
5   -> true 
*/

let n3 = getRandomNumber(-5, 5);
console.log(n3 >= 0);


/*
Find if a number is negative or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is negative, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> true 
-1   -> true 
0   -> false 
1   -> false 
5   -> false
*/


let n4 = getRandomNumber(-5, 5);
console.log(n4 < 0);


/*
Find if a number is divisible by 5 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
5   -> true 
20   -> true 
37   -> false 
50   -> true 
*/


let n5 = getRandomNumber(1, 50);
console.log(n5 % 5 === 0);



/*
Find if a number is divisible by 7 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 7, print true. 
Otherwise, print false.
*/

let n6 = getRandomNumber(1, 50);
console.log(n6 % 7 === 0);




/*
Calculate the sum of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the sum of the numbers and print it. 
 
Examples: 
3, 5     -> 8 
7, 3    -> 10 
5, 5     -> 10 
1, 10     -> 11 
10, 1     -> 11 
*/

let n7 = getRandomNumber(1, 10);
let n8 = getRandomNumber(1, 10);
console.log(n7 + n8);


/*
Calculate the absolute difference between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it. 
 
Examples: 
3, 5     -> 2 
7, 3    -> 4 
5, 5     -> 0 
1, 10     -> 9 
10, 1     -> 9 
*/

let n9 = getRandomNumber(1, 10);
let n10 = getRandomNumber(1, 10);
console.log(Math.abs(n9 - n10));


/*
Calculate the product of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it.
*/


let n11 = getRandomNumber(1, 10);
let n12 = getRandomNumber(1, 10);
console.log(n11 * n12);



/*
Calculate the square of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 4 
5   -> 25 
10   -> 100 
*/

let num13 = getRandomNumber(1, 10);
console.log(num13 ** 2);


/*
Calculate the cube of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it. 
*/

let num14 = getRandomNumber(1, 10);
console.log(num14 ** 3);


/*
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit. 
Convert miles unit to kilometers and print it. 
Please assume that 1 mile equals 1.6 kilometers.
*/

let num15 = getRandomNumber(1, 10);
console.log(num15 * 1.6);


/*
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as a kilogram unit. 
Convert kilogram unit to pounds and print it. 
Please assume that 1 kilogram equals 2.2 pounds.
*/

let num16 = getRandomNumber(1, 100);
console.log(num16 * 2.2);


/*
Find if 2 numbers are equal or not. 
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). 
If the numbers are equal, print true. 
Otherwise, print false. 
*/


let num17 = getRandomNumber(1, 3);
let num18 = getRandomNumber(1, 3);
console.log(num17 === num18);


/*
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age. 
If the age is more than or equal to 16, print true. 
Otherwise, print false. 
*/

let num19 = getRandomNumber(1, 100);
console.log(num19 >= 16);


/*
Find the greatest number between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it. 
*/

let num20 = getRandomNumber(1, 10);
let num21 = getRandomNumber(1, 10);
console.log(Math.max(num20, num21));



/*
Find the greatest number between 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it. 
*/

let num22 = getRandomNumber(1, 10);
let num23 = getRandomNumber(1, 10);
let num24 = getRandomNumber(1, 10);
console.log(Math.max(num22, num23, num24));


/*
Find the smallest number between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it.
*/


let num25 = getRandomNumber(1, 10);
let num26 = getRandomNumber(1, 10);
console.log(Math.min(num25, num26));


/*
Find the smallest number between 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it.
*/


let num27 = getRandomNumber(1, 10);
let num28 = getRandomNumber(1, 10);
let num29 = getRandomNumber(1, 10);
console.log(Math.min(num27, num28, num29));


/*
Calculate the average of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it. 
*/


let num30 = getRandomNumber(1, 10);
let num31 = getRandomNumber(1, 10);
let num32 = getRandomNumber(1, 10);
console.log((num30 + num31 + num32) / 3);


/*
Calculate the absolute difference between max and min of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.
*/


let num33 = getRandomNumber(1, 10);
let num34 = getRandomNumber(1, 10);
let num35 = getRandomNumber(1, 10);
let num36 = Math.abs(Math.max(num33, num34, num35)) - (Math.min(num33, num34, num35));
console.log(num36);




/*
Find the quarter of a random number between 1 and 100. 
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it. 
1st quarter is 1-25 
2nd quarter is 26-50 
3rd quarter is 51-75 
4th quarter is 76-100
*/

let num37 = getRandomNumber(1, 100);

if (num37 <= 25) {
    console.log("1st quarter is 1-25");
}
else if (num37 <= 50) {
    console.log("2nd quarter is 26-50");
}
else if (console.log(num37 <= 75)) {
    console.log("3nd quarter is 51-75");
}
else {
    console.log("4nd quarter is 76-100");
}


/*
Find the midpoint of a random number between 1 and 100. 
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it. 
1st half is 1-50 
2nd half is 51-100
*/

let num38 = getRandomNumber(1, 100);

if (num38 <= 50) {
    console.log("1st half 1-50");
}
else if (num38 <= 100) {
    console.log("2nd half is 51-100");
}



/*
Find if sum of 2 random numbers is even or not. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the sum of the random numbers is even, print true. 
Otherwise, print false.
*/


let num39 = getRandomNumber(1, 10);
let num40 = getRandomNumber(1, 10);

console.log((num39 + num40) % 2 === 0);



/*
Find if product of 2 random numbers is odd or not. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the product of the random numbers is odd, print true. 
Otherwise, print false. 
*/


let num41 = getRandomNumber(1, 10);
let num42 = getRandomNumber(1, 10);

console.log((num41 + num42) % 2 === 1);



/*
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Area = x * y
*/

function rectangleArea(x, y) {
    return x * y;
}
console.log(rectangleArea(5, 4))




/*
Perimeter of a rectangle. 
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when 
invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Perimeter = 2 * (x + y)
*/


function rectanglePerimeter(x, y) {
    return 2 * (x + y);
}
console.log(rectanglePerimeter(5, 4))


/*
Area of a square 
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula:Area = x * x
*/


function squareArea(x) {
    return x * x;
}
console.log(5);



/*
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula: Perimeter = 4 * x 
*/


function squarePerimeter(x) {
    return 4 * x;
}
console.log(squarePerimeter(5));



/*
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word.
*/

function doubleWord(string) {
    return string + string;
}
console.log(doubleWord("Global"));



/*
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
*/


function firstCharacter(string) {
    return string[0];
}
console.log(firstCharacter("Tech"));




/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
*/


function firstTwoCharacters(string) {
    return string.slice(0, 2);
}
console.log(firstTwoCharacters("Tech"));


/*
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
*/


function lastCharacter(string) {
    return string.slice(string.length - 1);
}
console.log(lastCharacter("Tech"));



/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
*/




function lastTwoCharacters(string) {
    return string.slice(string.length - 2);
}
console.log(lastTwoCharacters("Tech"));


/*
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
*/

function firstLast(string) {
    return string[0] + string.slice(string.length - 1);
}
console.log(firstLast("TechGlobal"));


/*
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked. 
*/


function hasFive(string) {
    return (string.length >= 5);
}
console.log(hasFive("Tech"));
console.log(hasFive("Global"));




/*
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back.
*/



function middle(string) {
    if (string.length % 2 === 0) return string.slice(string.length / 2 - 1, string.length / 2 + 1);
    return string[(string.length - 1) / 2];
}
console.log(middle("Global"));
console.log(middle("apple"));



/*
 else if (string.length % 2 === 1)
Longer String 
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked. 
NOTE: If both of the words have the same length, then return the first string.
????????????????????
*/


function longer(string1, string2) {
    if (string1.length < string2.length) return string2;
    else return string1
}

console.log(longer("Tech", "Global"));
console.log(longer("Global", "Tech"));
console.log(longer("Yura", "Tech"));
console.log(longer("Tech", "Yura"));
console.log(longer("Java", "JavaScript"));
console.log(longer("HelloWorld", "Hello"));
console.log(longer("Java", "Script"));
console.log(longer("JavaScript", "Java"));



/*
Shorter String 
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked. 
NOTE: if both of the words have the same length, then return the second String. 
*/

function shorter(string1, string2) {
    if (string2.length > string1.length) return string1;
    else return string2
}

console.log(shorter("Tech", "Global"));
console.log(shorter("Yura", "Tech"));
console.log(shorter("Global", "Tech"));
console.log(shorter("Tech", "Yura"));
console.log(shorter("Java", "JavaScript"));
console.log(shorter("HelloWorld", "Hello"));
console.log(shorter("Java", "Script"));
console.log(shorter("JavaScript", "Java"));






/*
Concat Two String 
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked. 
NOTE: Concatenation should always be as first string + second string .  
 
Examples: 
concat("Tech", "Global")  -> "TechGlobal" 
concat("Hello", "World")  -> "HelloWorld" 
concat("", "abc")    -> "abc" 
concat("123", "1234")    -> "1231234"
*/


function concat(string1, string2) {
    return string1.concat(string2);
}
console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("123", "1234"));




/*
Starts With Vowel 
Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked. 
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
*/




function startsVowel(string) {
    return "aeiouAEIOU".includes(string[0]);
}

console.log(startsVowel("Apple"));



function longer(word1, word2) {
    if (word1.length < word2.length) return word2;
    else return word1;
}

console.log(longer("Java", "JavaScript"));
console.log(longer("JavaScript", "Java"));
console.log(longer("hello", "HelloWorld"));
console.log(longer("HelloWorld", "Hello"));

function longer(word1, word2) {
    if (word2.length > word1.length) return word1;
    else return word2;
}

console.log(longer("Java", "JavaScript"));
console.log(longer("JavaScript", "Java"));
console.log(longer("hello", "HelloWorld"));
console.log(longer("HelloWorld", "Hello"));



/*
const numbers = [3, 4, 7, 3, 2, 2, 7];
//Find the average of these numbers -> 4
*/


const numbers = [3, 4, 7, 3, 2, 2, 7];
let sum = 0;

for (const number of numbers) {
    sum += number;
}
console.log(sum / numbers.length);



/*Please find the first even number from the below array
[1, 3, 0, 2, 6, 8] -> 0
*/

const numbers2 = [1, 3, 0, 2, 6, 8];
let firstEven = 0;

for (const number of numbers2) {
    if (number % 2 === 0) {
        firstEven = number;
        break
    }
}
console.log(firstEven);

// How to reverse a string
// John     -> nhoJ
let name = 'John Doe';
let reversedName = '';

for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i];
}
console.log(reversedName);



let string = 'Hello World JavaScript!';
let string1 = string.split("").reverse().join("")
let string2 = string1.split(" ").reverse().join(" ")

console.log(string1);
console.log(string2);


/*
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
*/

let n = Math.floor(Math.random() * 11)
let factorial = 1;

for (let i = 0; i <= n; i++) {
    factorial *= n;
}
console.log(factorial);


/*
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
*/


let count = 0;
let rn = 1;
while (rn % 5 !== 0) {
    rn = Math.floor(Math.random() * 101);
    count++;
}
console.log(rn, count);