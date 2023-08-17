// String - Searching
let text = "Can I can a can";

//search

let result1 = text.search("can");
let result2 = text.search("Can");

console.log(result1);
console.log(result2);


console.log(text.search(""));
console.log(text.search(" "));
console.log(text.search("Hello")); // -1

console.log(text.search(text)); // 0
console.log(text.search("Can I can")); // 0

console.log(text.search)




// includes()


let quote = "I can do it";

let r1 = quote.includes("can") // true 
let r2 = quote.includes("it")  // true
let r3 = quote.includes("IT") // false


// Tricky part

console.log(quote.includes(quote)); // true

console.log(quote.includes("")); // True
console.log(quote.includes(" ")); // True
console.log(quote.includes("  ")); // True



// indexOf() vs lastIndexOf()
let greeting = "GOOD MORNING";

console.log(greeting.indexOf("G")); // 0 
console.log(greeting.lastIndexOf("G")); // 11


console.log(greeting.indexOf("GOOD")); // 0
console.log(greeting.lastIndexOf("GOOD")); // 0
console.log(greeting.indexOf("GOOD MORNING")); // 0
console.log(greeting.lastIndexOf("GOOD MORNING")); // 0

let sentence = "I like apple and pineapple";

console.log(sentence.indexOf("apple")); // 7
console.log(sentence.lastIndexOf("apple")); // 21

// Tricky Part
console.log(sentence.lastIndexOf("abc")); // -1
console.log(sentence.lastIndexOf("abc")); // -1

console.log(sentence.lastIndexOf(" ")); // 1
console.log(sentence.lastIndexOf(" ")); // 16

console.log(sentence.indexOf("")); // 0
console.log(sentence.lastIndexOf("")); // 26


// statrsWith endsWIth

let info = "My phone number is 321- 000-0000";

let b1 = info.startsWith("M"); // True
let b2 = info.startsWith("My"); // True
let b3 = info.endsWith("000"); // True

console.log(b1);
console.log(b2);
console.log(b3);



console.log(info.startsWith("phone")); // false


console.log(info.endsWith(info)); // true
console.log(info.startsWith(info)); // true


console.log(info.startsWith("")); // true
console.log(info.endsWith("")); // true




