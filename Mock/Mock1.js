/*
Task 1
Double or Triple the Word 
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked. 
 
Examples: 
doubleOrTripleWord("Tech")     -> "TechTechTech" 
doubleOrTripleWord("Apple")     -> "AppleApple” 
doubleOrTripleWord("")       -> "" 
doubleOrTripleWord(" ")       -> " " 
doubleOrTripleWord("1")       -> "11" 
doubleOrTripleWord("22")       -> "222222"
*/

/*
function doubleOrTripleWord (word) {
    if (word.length % 2 === 0) return word + word + word
    else if (word.length % 2 !== 0)return word + word
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord('Apple'));
*/


const doubleOrTripleWord = word => {
    if (word.length % 2 === 0) return word + word + word
    else if (word.length % 2 !==0) return word + word
    
}
console.log(doubleOrTripleWord("Tech"));

/*
Task 2
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
 
Examples: 
firstLastWord("Hello World")     -> "HelloWorld" 
firstLastWord("I like JavaScript")    -> "IJavaScript” 
firstLastWord("Hello")       -> "HelloHello" 
firstLastWord("")         -> "" 
firstLastWord("  ")       -> ""
*/

function firstLastWord(string){
    return string.slice(0, string.indexOf(" ")) + string.slice(string.lastIndexOf(" ") + 1);
}
console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));




/*
Task 3
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. 
 
Examples: 
hasVowel("")        -> false 
hasVowel("Javascript")     -> true 
hasVowel("Tech Global")     -> true 
hasVowel("1234")       -> false 
hasVowel("ABC")       -> true 
*/



function hasVowel(array) {
    for (const word of array) {
        if ('aeoui'.includes(word.toLowerCase())) return true
    }
    return false
}
console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));


/*
Task 4
Start Vowel 
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
 
Examples: 
startVowel("Hello")     -> false 
startVowel("Apple")    -> true 
startVowel("orange")   -> true 
startVowel("")     -> false 
startVowel("  ")     -> false 
startVowel("123")     -> false 
*/


function startVowel(string){
    for (const str of string){
        if ('AEOUIaeoui'.startsWith(str)) return true
    }
    return false
}

console.log(startVowel("Apple"));
console.log(startVowel("Hello") );

/*
Task 5
Average of Edges 
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers. 
 
Examples: 
averageOfEdges(0, 0, 0)   -> 0 
averageOfEdges(0, 0, 6)   -> 3 
averageOfEdges(-2, -2, 10)   -> 4 
averageOfEdges(-3, 15, -3)   -> 6 
averageOfEdges(10, 13, 20)   -> 15
*/

function averageOfEdges(n1,n2,n3){
    return (Math.max(n1,n2,n3) + Math.min(n1,n2,n3)) / 2
   
}
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-3, 15, -3) );
console.log(averageOfEdges(10, 13, 20));


/*
Task 6
Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
Examples: 
replaceFirstLast("")         ->  "" 
replaceFirstLast("Hello")       ->  "oellH" 
replaceFirstLast("Tech Global")     -> "lech GlobaT" 
replaceFirstLast("A")       -> "" 
replaceFirstLast("    A      ")      -> ""
*/

function replaceFirstLast(string){
    return string.slice(-1) + string.slice(1,-1) + string[0]
}
console.log(replaceFirstLast("Tech Global"));

/*
Task 7
Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters. 
 
Examples: 
swap4("abc")       -> "" 
swap4("JavaScript")      -> "riptScJava" 
swap4("TechGlobal")     -> "obalGlTech" 
swap4("")         -> "" 
swap4("  ")       -> "" 
swap4("Apple")       -> ""
*/

function swap4(word) {
    if (word.length < 8) return "";
    return word.slice(word.length -4) + word.slice(4, word.length-4) + word.slice(0, 4);
  
}
console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));



/*
Task 8
Swap First and Last Words 
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
 
Examples: 
swapFirstLastWord("Hello World")      -> "World Hello" 
swapFirstLastWord("I like JavaScript")   -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")     -> "bar bar foo foo" 
swapFirstLastWord("")         -> "" 
swapFirstLastWord("  ")         -> "" 
swapFirstLastWord("Hello")        -> "" 
swapFirstLastWord("Hello   ")       -> ""
*/



function swapFirstLastWord (string) {
    if (string.trim().includes(' ')) return string.slice(string.lastIndexOf(" ") +1) + string.slice(string.indexOf(' '), string.lastIndexOf(' ') +1) + string[0];
    else return "" 
}
console.log(swapFirstLastWord("I like JavaScript") );


/*
Task 9
Count Positive Numbers 
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.  
 
Examples: 
countPos([-45, 0, 0, 34, 5, 67])     -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4 
countPos([0, -1, -2, -3])       -> 0 
 */

function countPos (array){
    let count = 0;
    for(const num of array){
        if (num > 0) count ++;
    }
    return count;
}
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));



/*
Task 10
Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
getEvens(2, 7)    -> [ 2, 4, 6 ] 
getEvens(17, 5)    -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)    -> [ 4 ] 
getEvens(3, 3)    -> [ ]
*/


function getEvens(ar1, ar2){
    let arr = [];
    for(let i = Math.min(ar1,ar2); i <= Math.max(ar1,ar2);i ++ ){
        if (i % 5 === 0) arr.push(i)
    }
    return arr;
}

console.log(getEvens(17, 5));


/*
Find Numbers Divisible By 5 
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
Examples: 
getMultipleOf5(3, 17)    -> [ 5, 10, 15] 
getMultipleOf5(23, 5)    -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)      -> [ 5 ] 
getMultipleOf5(2, 4)      -> [ ]
*/

function getMultipleOf5 (ar1,ar2){
    let arr = [];
    for (let i = Math.max(ar1,ar2); i <= Math.min(ar1,ar2); i++){
        if (i % 5 === 0) arr.push(i)
    }
    return arr;
}
console.log(getMultipleOf5(23, 5));






/*
Task 
Write a function named countWords() which takes a string argument and returns the total 
count of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. 
 
Examples: 
countWords("     Javascript is fun       ")         -> 3 
countWords("Cypress is an UI automation tool.    ")     -> 6  
countWords("1 2 3 4")
*/


function countWords (string){
    return string.trim().split(' ').length
    
}
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("     Javascript is fun       ") );




/*
Count 3 or Less 
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked. 
 
Examples: 
count3OrLess("Hello")         -> 0 
count3OrLess("Hi John")         -> 1 
count3OrLess("JavaScript is fun")       -> 2 
count3OrLess("My name is John Doe")     -> 3 
count3OrLess("")           -> 0
*/

function count3OrLess (string){
    let str = string.split(' ')
    let count = 0;
    for (const word of str){
        if (word.length <= 3 && word.length !== 0) count++;
        }
        return count++;
}
  
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));


/*
Remove Duplicates 
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed. 
 
Examples: 
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])      -> [10, 20, 35, 60, 70] 
removeDuplicates([1, 2, 5, 2, 3])           -> [1, 2, 5, 3] 
removeDuplicates([0, -1, -2, -2, -1])         -> [0, -1, -2] 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"] 
removeDuplicates(["1", "2", "3", "2", "3"])         -> ["1", "2", "3"]
*/


const removeDuplicates = array => 
    array.filter((value,index) =>{
        return array.indexOf(value) === index
    }) 
    console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));


    /*
    No Elements Equals 13 
Write a function named no13() which takes an array of numbers as argument and return a new 
array with all 13s replaced with 0s.  
 
Examples: 
no13([1, 2, 3 ,4])       -> [1, 2, 3 ,4]  
no13([13, 2, 3])       -> [0, 2, 3] 
no13([13, 13, 13 , 13, 13])     -> [0, 0, 0, 0, 0] 
no13([])         -> [] 
*/

const no13 = array => array.map( x => x === 13 ? x = 0: x = x);
console.log(no13([13, 2, 3]) );


/*
No Elements Divisible By 3 and 5 
Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below. 
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101 
 
Examples: 
no3and5([7, 4, 11, 23, 17])       -> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])       -> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])     -> [99, 11, 100, 13, 14, 101]
*/

const no3and5 = array => {
return array.map(num => {
    if (num % 15 === 0){
    return 101
    }
    else if (num % 5 === 0){
        return 99
    }
   else if (num % 3 === 0){
        return 100
    }
    else return num
})
}
console.log(no3and5([10, 11, 12, 13, 14, 15]));

/*
No Elements With A 
Write a function named noA() which takes an array of strings as argument and will return a 
new array with all elements starting with "A" or "a" replaced with "###". 
 
Examples: 
noA(["javascript", "hello", "123", "xyz"])     ->  ["javascript", "hello", "123", "xyz"] 
noA(["apple", "123", "ABC", "javascript"])     ->  ["###", "123", "###", "javascript"] 
noA(["apple", "abc", "ABC", "Alex", "A"])     ->  ["###", "###", "###", "###", "###"] 
*/

const noA = array =>{
    return array.map(x =>{
        if (x.startsWith('a') || x.startsWith('A')){
            return '###'
        }
        else return x
        
    })

}

console.log(noA(["apple", "123", "ABC", "javascript"]));


/*
Add Two Arrays 
Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different. 
 
Examples: 
add([3, 0, 0, 7, 5, 10], [6, 3, 2])         -> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])     -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])         -> [0, 0, 0, 0] 
*/



const add = (arr1,arr2) => {
    if (arr2.length > arr1.length) [arr1,arr2] = [arr2,arr1];
    return arr1.map((value,index) => {
        return value + (arr2[index] || 0)
    })
    
}
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));


/*
Count Consonants 
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked. 
NOTE: A letter that is not vowel is considered as a consonant letter. 
 
Examples: 
countConsonants("Hello")         -> 3 
countConsonants("Hello World")       -> 8 
countConsonants("JavaScript is fun")     -> 12 
countConsonants("")         -> 0
*/

const countConsonants = string =>{
    let count = 0;
    for (const str of string){
        if (!"AEOUiaeoui".includes(str)) count++;
    }
    return count;
}
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));


/*
Count Multiple Words 
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked. 
NOTE: Be careful about the extra whitespaces before and after the array element. 
 
Examples: 
countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])     -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])     -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])     -> 4 
countMultipleWords([ ])  
*/





/*
FizzBuzz 
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
composed with below requirements when invoked. 
•  You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each 
number. 
•  You will need to convert numbers divisible by 3 to 'Fizz' 
•  You will need to convert numbers divisible by 5 to 'Buzz' 
•  You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’ 
•  The rest will stay the same. 
NOTE: Make your code dynamic that works for any numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
fizzBuzz(13, 18)    -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)    -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)    -> "Buzz" 
fizzBuzz(9, 6)    -> "Fizz | 7 | 8 | Fizz" 
*/
 
const palindrome = array =>{
    let str = '';
    for (let i = array.length -1; i >= 0;i--){
        str += array[i]
        if (str === array) return true
    }
    return false
}

console.log(palindrome('kayak'));
console.log(palindrome('hello'));
console.log(palindrome('civic'));
console.log(palindrome('1221'));
console.log(palindrome('java'));
