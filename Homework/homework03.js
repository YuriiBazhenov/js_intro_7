


Task - 1


function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let n1 = getRandomNumber(1, 100);
let n2 = getRandomNumber(1, 100);
let n3 = getRandomNumber(1, 100);
console.log((n1 + n2 + n3) / 2 >= 50);


/*
Task - 2
*/

let num1 = getRandomNumber(1 , 3);
let num2 = getRandomNumber(1 , 3);
let num3 = getRandomNumber(1 , 3);

if (num1 === num2 === num3) {
 console.log("TRIPLE MATCH");
}
else if ( num1 != num2 != num3) {
    console.log("NO MATCH");
}
else {
    console.log("DOUBLE MATCH");
}


/*
Task - 3
*/


function hasA(word) {
    return word.toUpperCase().includes("A");
}
console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));


/*
Task - 4
*/


function doubleOrTripleWord(word) {
    if (word.length % 2 === 0) return word + word + word;
    else if (word.length % 2 === 1) return word + word;
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));


/*
Task - 5
*/



function firstWord(word) {
  if (word.includes(" ")) return word.slice(0, word.indexOf(" "));
  else return word 
}
console.log(firstWord("Hello World"));
console.log(firstWord("I like javaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord(" "));



/*
Task - 6
*/


function lastWord(word) {
    return word.slice(word.lastIndexOf(" ") + 1);
}
console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord("  "));




/*
Task - 7
*/


function firstlastWord(word) {
   if (word.includes(" ")) return word.slice(0, word.indexOf(" ")) + word.slice(word.lastIndexOf(" "));
   else return word + word
}
console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord(" "));




/*
Task - 8
*/


function startVowel(word) {
if (word.toUpperCase().includes("A") || 
word.toUpperCase().startsWith("E") || 
word.toUpperCase().startsWith("I") || 
word.toUpperCase().startsWith("O") || 
word.toUpperCase().startsWith("u")) return true;
else return false;
}
console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("  "));
console.log(startVowel("123"));



/*
Task - 9
*/


function swap4(word) {
    if (word.length < 8) return "";
    let swapword = (word.slice(-4) + word.slice(4, -4) + word.slice(0, 4));
    return swapword;
}
console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("Tech Global"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));



/*
Task - 10
*/

function swapFirstLastWord1(word) {
if (word.trim().includes(" ")) return word.slice(word.lastIndexOf(" ") +1) + word.slice(word.indexOf(" "), word.lastIndexOf(" ") + 1) + word.slice(0 , word.indexOf(" "));
else return ""
}
console.log(swapFirstLastWord1("Hello World"));
console.log(swapFirstLastWord1("I like JavaScript"));
console.log(swapFirstLastWord1("foo bar foo bar"));
console.log(swapFirstLastWord1(""));
console.log(swapFirstLastWord1("   "));
console.log(swapFirstLastWord1("Hello"));
console.log(swapFirstLastWord1("Hello  "));


