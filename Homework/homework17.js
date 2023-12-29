
/*
1
Requirement:
Write a function named findMedian() which takes two arrays of numbers as 
its arguments and return the median of the two sorted arrays. 
NOTE: The median is the middle number of a sorted array. So the median of 
[1,3], [2] would be 2. If the array has an even length, you are to find the average 
of the 2 middle numbers
findMedian([1, 3], [2])  -> 2
findMedian([1, 2], [3, 4])  -> 2.5
findMedian([4], [3])  -> 3.5
findMedian([4], [])   -> 4
findMedian([0], [0,1])    -> 0
*/

const findMedian = (arr1, arr2) => {
    const arr3 = [...arr1, ...arr2].sort((a, b) => a - b)
    const arr4 = arr3.map(value => value).length / 2
    return arr3.length % 2 !== 0 ? arr3[Math.floor(arr4)] : (arr3[arr3.length / 2] + arr3[arr3.length / 2] - 1) / 2
}
console.log(findMedian([1, 3], [2]))
console.log(findMedian([1, 2], [3, 4]))
console.log(findMedian([4], [3]))
console.log(findMedian([4], []))
console.log(findMedian([0], [0, 1]))




/*
2
Requirement:
Write a function named calculateFactorial() which takes a number as an 
argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer and an exclamation point. 
Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial 
zero is defined as equal to 1.
calculateFactorial(0)  -> 1
calculateFactorial(1)  -> 1
calculateFactorial(5)  -> 120
calculateFactorial(6)  -> 720
calculateFactorial(10)  -> 3628800
calculateFactorial(4)  -> 24
*/

const calculateFactorial = number => {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    return factorial
}

console.log(calculateFactorial(0))
console.log(calculateFactorial(1))
console.log(calculateFactorial(5))
console.log(calculateFactorial(6))
console.log(calculateFactorial(10))
console.log(calculateFactorial(4))


/*
3
Requirement:
Write a function named calculateGCD() which takes two numbers as 
arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:
calculateGCD(8, 12)  -> 4
calculateGCD(17, 5)  -> 1
calculateGCD(48, 18)  -> 6
calculateGCD(0, 5)  -> 5
calculateGCD(21, 14)  -> 7
calculateGCD(60, 48)  -> 12
*/




const calculateGCD = (n1, n2) => {
    for (let i = Math.max(n1, n2); i > 0; i--) {
        if (n1 % i === 0 && n2 % i === 0)
        return i
    }
}

console.log(calculateGCD(8, 12))
console.log(calculateGCD(17, 5))
console.log(calculateGCD(48, 18))
console.log(calculateGCD(0, 5))
console.log(calculateGCD(21, 14))
console.log(calculateGCD(60, 48))



/*
4
Requirement:
Write a function named calculateLCM() which takes two numbers as 
arguments and returns the least common multiple of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:
calculateLCM(8, 12)  -> 24
calculateLCM(17, 5)  -> 85
calculateLCM(48, 18)  -> 144
calculateLCM(0, 5)  -> 0
calculateLCM(21, 14)  -> 42
calculateLCM(60, 48)  -> 240
*/


const calculateLCM = (n1,n2) => {
    for (let i = Math.max(n1, n2); i > 0; i--) {
        if (n1 % i === 0 && n2 % i === 0)
        return (n1 * n2) / i
    }
}

console.log(calculateLCM(8, 12))
console.log(calculateLCM(17, 5))
console.log(calculateLCM(48, 18))
console.log(calculateLCM(0, 5))
console.log(calculateLCM(21, 14))
console.log(calculateLCM(60, 48))
