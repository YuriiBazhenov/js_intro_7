
/*
1
Requirement:
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad" )  -> 2
countPalindrome("See you at noon")  -> 1
countPalindrome("Kayak races attracts racecar drivers")  -> 2
countPalindrome("")  -> 0
countPalindrome("No palindrome here")  -> 0
*/


const countPalindrome = string => {

    let palindrome = ''
    let count = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        palindrome += string[i]
    }

    palindrome.toLowerCase().split(' ').filter(x => {
        for (const word of string.split(' ')) {
            if (word === '')
                return 0
            else if (x === word.toLowerCase())
                count++
        }
    })
    return count;

}
console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome(""));
console.log(countPalindrome("No palindrome here"));



/*
2
Requirement:
Write a function named sum() which takes an array of numbers and a boolean 
value as arguments. It will return the sum of the numbers positioned at even 
indexes if true. And, return sum of numbers positioned at odd indexes if false.
Examples:
sum([1, 5, 10], true)  -> 11
sum([3, 7, 2, 5, 10], false)  -> 12
sum([-1, 1, -2, 2], true)  -> -3
sum([0, -1, 15, 1], false)  -> 0
sum([1, 2, 3, 4, -4], true)  -> 0
*/

const sum = (number, boolean) => {
    let total = 0
    for (const el of number) {
        if (number.indexOf(el) % 2 === 0 && boolean === true)
            total += el
        else if (number.indexOf(el) % 2 !== 0 && boolean === false)
            total += el
    }
    return total
}
console.log(sum([1, 5, 10], true))
console.log(sum([3, 7, 2, 5, 10], false))
console.log(sum([-1, 1, -2, 2], true))
console.log(sum([0, -1, 15, 1], false))
console.log(sum([1, 2, 3, 4, -4], true))

/*
3
Requirement:
Write a function named nthChars() which takes a string and a number as 
arguments and returns the string back with every nth characters. 
Examples:
nthChars("Java", 2)  -> "aa"
nthChars("JavaScript", 5)   -> "St"
nthChars("Java", 3)   -> "v"
nthChars("Hi", 4)   -> ""
nthChars("0123456789", 2)  -> "13579"
*/


const nthChats = (string, number) => string.split('').filter((value, index) => index % number === number - 1).join('')

console.log(nthChats("Java", 2))
console.log(nthChats("JavaScript", 5))
console.log(nthChats("Java", 3))
console.log(nthChats("Hi", 4))
console.log(nthChats("0123456789", 2))



/*
4
Requirement:
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the 
characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi")   -> false
canFormString("programming", "gaming")   -> true
canFormString("halogen", "hello")   -> false
canFormString("CONVERSATION", "voices rant on")   -> true
canFormString("12", "123")  -> false
*/

const canFormString = (str1,str2) => {
    let arr1 = str1.split('')
    let arr2 = str2.split('').filter(x => x != ' ')
    let empty = []
    for (let i = 0; i < arr2.length; i++){
        if (arr1.includes(arr2[i]) && !empty.includes(arr1[i])) empty.push(arr2[i])
    }
    return empty
}

console.log(canFormString("Hello", "Hi"))
console.log(canFormString("programming", "gaming"))
console.log(canFormString("halogen", "hello"))
console.log(canFormString("CONVERSATION", "voices rant on"))
console.log(canFormString("12", "123"))

/*
5
Requirement:
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
isAnagram("Apple", "Peach")   -> false
isAnagram("listen", "silent")   -> true
isAnagram("astronomer", "moon starer")   -> true
isAnagram("CINEMA", "iceman")   -> true
isAnagram("123", "1234")  -> false
*/

function isAnagram(str1, str2) {

    str1 = str1.toLowerCase().split(' ').filter(x => !(' '.includes(x))).join('')
    str2 = str2.toLowerCase().split(' ').filter(x => !(' '.includes(x))).join('')
    if (str1.length !== str2.length) {
        return false
    }
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')

    return str1 === str2
}

console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));
console.log(isAnagram("CINEMA", "iceman"));
console.log(isAnagram("123", "1234"));


/*
6
Requirement:
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false. 
Examples:
count([1, 5, 10], true)  -> 1
count([3, 7, 2, 5, 10], false)  -> 3
count([-1, 1, -2, 2], true)  -> 2
count([0, -1, 15, 1], false)  -> 3
count([1, 2, 3, 4, -4], true)  -> 3
*/


const count = (array, boolean) => {
    let counter = 0;
    for (const el of array) {
        if (el % 2 === 0 && boolean === true) counter++
        else if (el % 2 !== 0 && boolean === false)
            counter++;
    }
    return counter;
}

console.log(count([1, 5, 10], true))
console.log(count([3, 7, 2, 5, 10], false))
console.log(count([-1, 1, -2, 2], true))
console.log(count([0, -1, 15, 1], false))
console.log(count([1, 2, 3, 4, -4], true))

/*
7
Requirement:
Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return -1 if the given 
string does not have any digits. Ignore negative numbers.
Examples:
sumDigitsDouble("Javascript")  -> -1
sumDigitsDouble("23abc45")   -> 28
sumDigitsDouble("Hi-23")  -> 10
sumDigitsDouble("ab12")  -> 6
sumDigitsDouble("n0numh3r3")  -> 12
*/

function sumDigitsDouble(string) {
    let sum = 0
    for (let number of string) {
        if (Number(number)) sum += Number(number) * 2
    }
    if (sum === 0)
        return -1
    else return sum

}

console.log(sumDigitsDouble("Javascript"));
console.log(sumDigitsDouble("23abc45"));
console.log(sumDigitsDouble("Hi-23"));
console.log(sumDigitsDouble("ab12"));
console.log(sumDigitsDouble("n0numh3r3"));


/*
8
Requirement:
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java")  -> 1
countOccurrence("Hello", "World")  -> 0
countOccurrence("Can I can a can", "anc")   -> 3
countOccurrence("Hello", "l")   -> 2
countOccurrence("IT conversations", "IT")   -> 2
*/


const countOccurrence = (str1,str2) => {
    let count = 0
    let arr = str2.toLowerCase().split('').sort().join('')
    for (let i = 0; i < arr.length;i++){
    if (str1.toLowerCase().includes(arr[i]))
    count ++
    }
    return count
}

console.log(countOccurrence("Javascript", "Java"))
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))
console.log(countOccurrence("Hello", "l"))
console.log(countOccurrence("IT conversations", "IT"))