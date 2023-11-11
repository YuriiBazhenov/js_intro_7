// "I like apples and oranges"  -> "APPLES"
// "Java is not a scripting programming language"   -> "JavaScript”
//"I don't like books"  -> "I like books


let txt = "I like apples and oranges";
let txt1 = "Java is not a scripting programming language";
let txt2 = "I don't like books";
console.log(txt.toUpperCase().slice(7, 13));
console.log(txt1.slice(0, 4), txt1.toUpperCase().slice(14, 23));
console.log(txt2.slice(0,1), txt2.slice(8));

/* Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O
*/

let word = "JavaScript";
console.log(word.length);
console.log(word.slice(0,1))
console.log(word.slice(word.length -1));
console.log(word.toUpperCase().includes("A") || word.toUpperCase().includes("E") || word.toUpperCase().includes("I") ||
word.toUpperCase().includes("U") || word.toUpperCase().includes("O"));

/*
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 
Test Data 3:
let s2 = "civic";
Expected Result 3:
"v"
Test Data 1:
let s2 = "x";
Expected Result 1:
"x"
Test Data 2:
let s2 = "abc";
Expected Result 2:
*/

let s1 = "civic";
console.log(s1[(s1.length - 1) / 2]);


/*
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 
*/

let s03 = "JavaScript";
console.log(s03.slice(s03.length / 2, +1));


/*
Write a program that divides the given String. Assume the length of the 
String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters
*/

let word1 = "JavaScriptIsLanguage";

console.log(word1.slice(0,2));
console.log(word1.slice(word1.length - 2));
console.log(word1.slice(2, word1.length - 2));


/* Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.
*/

let s5 = "xxxyura";
console.log(s5.slice(0, 2) == s5.slice(s5.length - 2));


/*
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 
*/


let s61 = "Yellow";
let s62 = "Red";

console.log(s61.slice(1, s61.length - 1) + s62.slice(1, s62.length - 1));


/*
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false
*/


let s8 = "xxredxx";
console.log(s8.startsWith("xx") && s8.endsWith("xx"));



/*
Write a program that swaps the first and last word of a given sentence as a String.
*/

let s = "I like apple";

(s.slice(0 , s.indexOf(" ")));





// Functions

function toCelsius(fahrenheit) {
    return (6/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
  console.log(value);

  // 1

  function greet(user){ 
    return "Hello World";
  }

user = "Yurii";
let str = greet(user);
console.log(str);


let str1 = "JavaScript";

console.log(str1.length);
console.log(str1[0]);
console.log(str1[str1.length - 1]);
console.log(str1.toUpperCase().includes("A"));


let txt01 = "JavaScript";
console.log(txt01.slice(txt01.length / 2 - 1, txt01.length / 2 + 1));



let s01 = (Math.floor(Math.random() * 10) + 1);
let s02 = (Math.floor(Math.random() * 10) + 1);
console.log(Math.min(s01, s02));

/*
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 5, print true.
Otherwise, print false.
*/

let x1 = (Math.floor(Math.random() * 50) + 1);
let x2 = x1 % 5 === 0;
console.log(x2);


function str1(){
  let str2 = Math.floor(Math.random() * 50) + 1 ;
  return str2 % 5 === 0 
}
console.log(str1());

function average5(y1, y2, y3, y4, y5){
  return (y1 + y2 + y3 + y4 + y5) / 5;
}
console.log(average5(10,15,140,20,30));


// 4 characters
function has4(str1){
  return str1.length === 4
}
console.log(has4("Tec"));



/*
Write a function named as lastShortest() which takes 
an array as an argument and returns the shortest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 or more elements having the 
shortest count of characters, always return the last 
occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])  -> 
"red"
lastShortest(["Apple", "Banana", "Mango"])  -> 
"Mango"
lastShortest(["white", "yellow", "brown"])  -> 
"brown"
*/


function lastShortest(array){
  let lastS = '';
  let max = -Infinity
  for (const word of array){
    if (word.length > max){
      lastS = word
      max.length = word.length
    }
    return lastS;
  }

}

console.log(lastShortest(["red", "blue", "yellow", "white"]));




function firstPos(array){
  for(const number of array){
    if(number > 0) return (number);
  }
}

console.log(firstPos([0, 3, -9,  5, 8]));




function max(array){
  let max = -Infinity;
  for (const number of array) {
    if (number > max) max = number
  }
  return max;
}
console.log(max([0, 3, -9, 5, 8]));