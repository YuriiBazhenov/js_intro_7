
/*
Write a program that outputs numbers from 1 to 30 (both inclusive)
1
2
3
.
.
.
29
30
*/
for(let i = 1; i <= 30; i++){
    console.log(i);
}


/*
Write a program that outputs numbers from 1 to 30 (both inclusive)
        If number is divided by 3, then output "Fizz" instead of number
        if number is divided by 5, then output "Buzz" instead pf number
        if number is divided by both 3 and 5, then output "FizzBuzz"
1
2
Fizz
4
Buzz
.
.
29
FizzBuzz
*/

for(let i = 1; i <= 30; i++){ // 15 or 30
    if(i % 15 === 0) console.log('FizzBuzz');
    else if(i % 3 === 0) console.log('Fizz');
    else if(i % 5 === 0) console.log('Buzz');
    else console.log(i);
}


function lastShortest(array){
    let sh = Infinity;
    let word = '';
    
    for (const str of array){
        if(str.length <= sh){
            sh = str.length;
            word = str
        }
       
    }
    return word;
}

console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));


function max(array) {
    let num = - Infinity
    for (const number of array){
        if (number > num) num = number
    }
    return num;
}

console.log(max([-2, 0, -7, 10, -5]));
console.log(max([0, 3, -9,  5, 8]));