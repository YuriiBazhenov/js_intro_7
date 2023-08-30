

const student = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30,
    fullnName: function(){
        return `${this.fName} ${this.lName}`;

    },
    info: function (){
        return `${this.fullnName()}'s age is $${this.age}.`;
    }

};

console.log(student.fName);
console.log(student.age);
console.log(student.fullnName());
console.log(student.info());


