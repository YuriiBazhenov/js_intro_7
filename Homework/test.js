
Math.ceil(Math.random() * max - min +1) + min -1; // both included

Math.ceil(Math.random() * max - min ) + min -1; // both excluded

// let random_number = (Math.floor(Math.random() * (max - min + 1))+min);

let random_number = Math.floor(Math.random() * (max - min + 1)) +min;
//
let num1  = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 26;
let num3 = Math.floor(Math.random() * 25) + 51;
let num4 = Math.floor(Math.random() * 25) + 76;

console.log((num1 + num2 + num3 + num4) / 4 );
console.log(Math.abs(num3 - num4));

//
let n1 = Math.floor((Math.random() * 10) + 1);
let n2 = Math.floor((Math.random() * 10) + 1);
console.log("Min number = " + Math.min(n1,n2));
console.log("Max number = " + Math.max(n1,n2));
console.log("Diference = " + Math.abs(n1,n2))

//
let n01 = Math.floor(Math.random() * 51) + 50;
console.log("The random number = " + n01 % 10) 
//
let rn1 = Math.floor(Math.random() * 25) + 1;
let rn2 = Math.floor(Math.random() * 25) + 26;
let rn3 = Math.floor(Math.random() * 25) + 51;
let rn4 = Math.floor(Math.random() * 25) + 76;
let diff = Math.max(rn1, rn2, rn3, rn4,) - Math.min(rn1, rn2, rn3, rn4);
console.log("Difference of max and min = " + diff);
console.log("Difference of second and third = " + Math.abs(rn3 - rn4));
console.log("Average of all = " + ((rn1 + rn2 + rn3 + rn4) / 4));


//
let random_1 = Math.ceil(Math.random() * 25);
let random_2 = Math.ceil(Math.random() * 25) + 25;
let random_3 = Math.ceil(Math.random() * 25) + 50;
let random_4 = Math.ceil(Math.random() * 25) + 75;
let dif = Math.max(random_1,random_2,random_3,random_4) - Math.min(random_1,random_2,random_3,random_4);
console.log("Expected result: \nDifference of max and min = " + dif);
console.log("Difference of second and third = " + (random_2 - random_3));
console.log("Average of all = " + (random_1 + random_2 + random_3 + random_4)/4);




//
let rn01 = Math.floor(Math.random() * 25) + 1;
let rn02 = Math.floor(Math.random() * 25) + 26;
let rn03 = Math.floor(Math.random() * 25) + 51;
let rn04 = Math.floor(Math.random() * 25) + 76;

let diFF = Math.max(rn01, rn02, rn03, rn04) - Math.min(rn01, rn02, rn03, rn04);
console.log("Difference of max and min = " + diFF);
console.log("Difference of second and third = " + Math.abs(rn03 - rn04));


// String Interpolation

let p1 = 4, p2 = 5, p6 = 7
console.log("Your total is = $" + `${(p1 + p2) / 4}`); 

//
let productPrice = 5, quantity = 7;
console.log(`The total amount of ${productPrice} products is $${quantity}`);


//


let pred = "My name is Yurii";

console.log(pred.toUpperCase())


// bt 37 to 52


console.log(Math.floor(Math.random() * 16 ) + 37);

//
let gretting = "Hello";
console.log(gretting.toUpperCase())



//
let text = "I love you, my dear";

console.log(text.includes());

let txt = "hello world"

console.log(txt.toUpperCase());



// bt 34 to 89

// (max - min + 1)  + min

console.log(Math.floor(Math.random() * 56) + 34);

let txt01 = "Hello World";
console.log(txt01 + `${" This is me"}`);



let a = 7, b = 8;
let area = a * b;
let perimeter = 2 * (a + b);
console.log(area);
console.log(perimeter);



// Anual Salary


let annualSalary = 120000;

console.log("Monthly income = $" + annualSalary / 12);
console.log("Bi-weekly income = $" + annualSalary / 26);
console.log("Weekly income = $" + annualSalary / 52);



console.log(Math.ceil(25.532) + 5);





let rNumber1 = Math.floor(Math.random() * 101);
let rNumber2 = Math.floor(Math.random() * 101);
let rNumber3 = Math.floor(Math.random() * 101);
console.log(rNumber1, rNumber2, rNumber3);
console.log(rNumber1 > 25 && rNumber2 > 25 && rNumber3 > 25);
console.log(!(rNumber1 <= 25 || rNumber2 <=25 || rNumber3 <= 25));



let word = "JavaScript";
console.log(word.slice(1, 5));



/*
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it. 
1st quarter is 1-25 
2nd quarter is 26-50 
3rd quarter is 51-75 
4th quarter is 76-100
*/

