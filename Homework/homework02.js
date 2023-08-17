console.log("\nTask 1\n");

let str1 = "5", str2 = "2";
let str01 = Number(str1), str02 = Number(str2);
console.log("The sum of 5 and 2 is = " + (str01 + str02));
console.log("The product of 5 and 2 is = " + (str1 * str2));
console.log("The division of 5 and 2 is = " + (str01 / str02));
console.log("The subtraction of 5 and 2 is = " + (str01 - str02));
console.log("The remainder of 5 and 2 is = " + (str01 % str02));
console.log("The exponentiation of 5 and 2 is = " + (str1 ** str2));


console.log("\nTask 2\n");

let s1 = "200", s2 = "-50";
let number1 = Number(s1), number2 = Number(s2);
console.log("The greatest value is = " + Math.max(number1, number2));
console.log("The smallest value is = " + Math.min(number1, number2));
console.log("The average is = " + (number1 + number2) / 2);
console.log("The absolute difference is = " + Math.abs(number1 - number2));


console.log("\nTask 3\n");

let num1 = (Math.floor(Math.random() * 50) + 1);
let num2 =(Math.floor(Math.random() * 50) + 1);

console.log(num1);
console.log(num2);
console.log("The absolute difference between numbers is = " + Math.abs(num1 - num2));


console.log("\nTask 4\n");

let num01 = (Math.floor(Math.random() * 50) + 1);
let num02 = (Math.floor(Math.random() * 50) + 1);
let num03 = (Math.floor(Math.random() * 50) + 1);
let num04 = (Math.floor(Math.random() * 50) + 1);
let num05 = (Math.floor(Math.random() * 50) + 1);

console.log(num01, num02, num03, num04, num05);

let maxValue =Math.max(num01, num02, num03, num04, num05);
let minValue =Math.min(num01, num02, num03, num04, num05);

console.log(`The max value = ${maxValue} \nThe min value = ${minValue}`);


console.log("\nTask 5\n");


let n1 = (Math.floor(Math.random() * 51) + 50);
let n2 = (Math.floor(Math.random() * 51) + 50);
let n3 = (Math.floor(Math.random() * 51) + 50);
console.log(n1, n2, n3);

console.log(`The number 1 = ${n1} \nThe number 2 = ${n2} \nThe number 3 = ${n3} \nThe sum of number is = ${n1 + n2 + n3}`);


console.log("\nTask 6\n");

let n01 = Math.floor(Math.random() * 100) + 1;
let n02 = Math.floor(Math.random() * 100) + 1;
let n03 = Math.floor(Math.random() * 100) + 1;
console.log(n01, n02, n03);
console.log((n01, n02, n03).toString() > 25);
console.log((n01, n02, n03).toString() < 25);


console.log("\nTask 7\n");
 

let name = "David";
console.log(name.length);
console.log(name[0]);
console.log(name[4]);
console.log(name.slice(0,3));
console.log(name.slice(2));


