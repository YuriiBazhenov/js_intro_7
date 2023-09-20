
/* this keyword

JavaScript is a functional programming language
*/


function printName(name) {
    console.log(this);
    console.log(name);
}

printName('Ulan');

// Impicit binding

const person = {
    name: 'Alan',
    age: 29,
    printName() {
        console.log(this.name);

    },
    mother:{
        hobbies: ['running', 'baking'],
        name: 'Jane',
        printName(){
            console.log(this.name); // value of this?
        }
    }
}
person.printName(); // this = person object 
person.mother.printName(); // this = mother

// Function is not inside the object 

const person1 = {
    name: 'Alan',
    age: 29,
}

function printName1(){
    console.log(this.name);
}

printName1(); 

printName1.call(person1);

function printHobbies(h1, h2, h3){
    console.log(`Hi, my name is ${this.name} and my hobbies are ${h1}, ${h2} and ${h3}`);
}

const hobbies = ['Reading', 'Coding', 'Fishing'];
printHobbies.call(person1, hobbies[0], hobbies[1], hobbies[2]);

// Apply


printHobbies.apply(person1, hobbies);


// Bind 

const bindedPringHobbies = printHobbies.bind(person1, hobbies[0], hobbies[1], hobbies[2]);
(bindedPringHobbies());

// this keyword inside normal function vs arrow function 

function logMesage(){
    console.log('this inside normal function', this)

}

const logMessage2 = () =>{
    console.log('this inside arrow function', this)
}

logMesage();
logMessage2();

const person3 = {
    name: 'Bali',
    languages: ['English', 'Albanian', 'Arabic', 'Chinese'],
    printLanguages(){
        const modifiedLang = this.languages.map(function(lang){
            //console.log(lang)
            //console.log(this)
            return `${this.languages.length} - ${lang}`
        })
        console.log(modifiedLang)
    }
};
person3.printLanguages();