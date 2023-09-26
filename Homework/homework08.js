/*
Requirement:
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("")  -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")  -> true
hasLowerCase("125$")  -> false
hasLowerCase("   a   ")  -> true
*/


function hasLowerCase(string) {

    for (const word of string) {
        if (word.charCodeAt() >= 97 && word.charCodeAt() <= 122)
            return true
    }
    return false
}

console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));



/*
Requirement:
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:
noZero([1])  -> [1]
noZero( [1, 1, 10] )  -> [1, 1, 10] 
noZero([0, 1, 10])  -> [1, 10]
noZero([0, 0, 0])  -> []
noZero([10, 100 0]) -> [10, 100]
*/

const noZero = array => array.filter(x => x === 0 ? x = '' : x)

console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));


/*
Requirement:
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
*/


const numberAndSquare = array => array.map(x => [x, x * x]);

console.log(numberAndSquare([1, 2, 3]))
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));


/*
Requirement:
Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello")  -> false
containsValue(["abc", "def", "123"], "Abc")  -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
*/

function containsValue(arr, value) {
    return arr.includes(value);
}
console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));



/*
Requirement:
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".
Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/

function reverseSentence(string) {
    let str = string.split(' ')
    if (str.length <= 1) {

        return 'There is not enough words!'
    }
    let str1 = str.reverse().join(' ')
    return str1
}


console.log(reverseSentence('Hello'));
console.log(reverseSentence("Javascript is fun"));
console.log(reverseSentence("This is a sentence"));


/*
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
fun" 
removeStringSpecialsDigits("Cypress")  -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")  -> "Automation"
*/


function removeStringSpecialsDigits(string) {
    let word = '';
    for (const char of string) {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char === " "))
            word += char;
    }
    return word
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));


/*Requirement:
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> 
["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", 
""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", 
"tool"]
*/


const removeArraySpecialsDigits = string => {
  return string.map(x => {
    let word = ''
    for (const char of x){
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char === " ")) word += char
    }
    return word
  })
  
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));



/*
Requirement:
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 
-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 
-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/


function getCommons(arr1, arr2){
    let common = new Set()
    for (const word of arr1){
        if (arr2.includes(word)){
            common.add(word)
            
        }
    
    }
    return [...common]
}

console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"]))
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]));

/*
Requirement:
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
Examples:
noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
*/

const noXInVariables = array =>{
  arr1 = array.map(word =>{
     return (word.toString().split('').filter(letter =>!(letter.toUpperCase() === 'X'))).join('')
  })
  return arr1.filter(word => (word.length > 0))
}

console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));

