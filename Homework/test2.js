

let s4 = "JavaScriptIsTheBestLanguage";
console.log(s4.slice(0, 2));
console.log(s4.slice(s4.length - 2));
console.log(s4.slice(2, s4.length - 2));


// F 1, l 5
let s04 = "JavaScriptIsTheBestLanguage";
console.log(s04.slice(0, 1));
console.log(s04.slice(s04.length - 5));
console.log(s04.slice(1, s04.length - 5));



let txt = "I like apple and oranges"; // APPLE
let txt1 = "Java is not a scripting programming language"; // JavaScript
let txt2 = "I don't like books"; // I like books

console.log(txt.slice(7, 12).toUpperCase());
console.log(txt1.slice(0, 4) + txt1.slice(14, 15).toUpperCase() + "cript");
console.log(txt2.replace(" don't", ""));

// Task 2

let s1 = "JavaScript";

console.log(`The length = ${s1.length}`);
console.log(s1[0]);
console.log(s1.charAt(s1.length - 1));
console.log(s1.toUpperCase().includes("A") || s1.toUpperCase().includes("E") || 
s1.toUpperCase().includes("I") || s1.toUpperCase().includes("U" || s1.toUpperCase().includes("O")));


// Task 3

let s2 = "Victoriy";
console.log(s2[(s2.length) / 2]);


console.log(s2[Math.floor(s2.length / 2)]);



// Task 4


let s3 = "JavaScript";
console.log(s3[s3.length / 2 - 1] + s3[s3.length / 2]);

console.log(s3.slice(s3.length / 2 - 1, s3.length / 2 + 1));


//5

let s5 = "JavaScript";

console.log(s5.slice(0, 2));
console.log(s5.slice(s5.length - 2));
console.log(s5.slice(2, s5.length - 2));


console.log(s5.slice(3, s5.length - 3));

// 6

let s6 = "12ab12";
console.log(s6.slice(0, 2) == s6.slice(s6.length -2));



let s61 = "Yellow"; 
let s62 = "Red";


console.log((s61.slice(1, s61.length -1))  + (s62.slice(1, s62.length -1)));


// Task 7



let s07 = "xxgreen";

console.log(s07.startsWith("xx") && s07.endsWith("xx"));


// Task 9

let s08 = "I like Apple";
let lastWord = s08.slice(s08.lastIndexOf(" ") + 1);
let firstWord = s08.slice(0, s08.indexOf(" "));
let middleWord = s08.slice(s08.indexOf(" ") + 1, (s08.lastIndexOf(" ")));
console.log(lastWord, middleWord, firstWord);

