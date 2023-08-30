const users = [
    {
        "id": 1,
        "firstName": "Tech",
        "lastName": "Global",
        "email": "tech.global@techglobal.com",
        "dob": "2020-09-20"
    },
    {
        "id": 2,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@techglobal.com",
        "dob": "2000-01-01"
    },
    {
        "id": 1890,
        "firstName": "Yunus",
        "lastName": "Cansever",
        "email": "yunuscansever@proton.me",
        "dob": "1999-09-13"
    },
    {
        "id": 1892,
        "firstName": "Yazan",
        "lastName": "Nogura",
        "email": "nogura@outlook.com",
        "dob": "1950-06-02"
    },
    {
        "id": 1891,
        "firstName": "Ramez",
        "lastName": "Karim",
        "email": "ramezkarim2244@gmail.com",
        "dob": "2001-08-06"
    },
    {
        "id": 1893,
        "firstName": "Abdullah",
        "lastName": "W",
        "email": "wazwazabdullah@gmail.com",
        "dob": "1999-07-15"
    },
    {
        "id": 1894,
        "firstName": "Yuliia",
        "lastName": "Khodak",
        "email": "ffffdsefs@gmail.com",
        "dob": "1998-04-05"
    },
    {
        "id": 1895,
        "firstName": "OLEKSANDR",
        "lastName": "TRACH",
        "email": "aleksandr.trach.od@gmail.com",
        "dob": "1993-04-16"
    },
    {
        "id": 1896,
        "firstName": "Ihar",
        "lastName": "Strelka",
        "email": "ig@gmail.com",
        "dob": "1987-02-20"
    },
    {
        "id": 1897,
        "firstName": "Aziz",
        "lastName": "Elm",
        "email": "aziz.elm@gmail.com",
        "dob": "1994-02-14"
    },
    {
        "id": 1898,
        "firstName": "Bajram",
        "lastName": "Rahmani",
        "email": "Bajramrahmani5@gmail.com",
        "dob": "1998-10-04"
    },
    {
        "id": 1899,
        "firstName": "Ivan",
        "lastName": "Garcia",
        "email": "ivanacosta0521@gmail.com",
        "dob": "1983-05-27"
    },
    {
        "id": 1900,
        "firstName": "Yurii",
        "lastName": "Bazhenov",
        "email": "bazhenovyura333@gmail.com",
        "dob": "2023-08-04"
    }
]

// Count how many names starts with A or I  -> 4

let count = 0;

for ( const user of users){
    /*
if (user.firstName.toLowerCase()[0] === 'a' || user.firstName.toLowerCase()[0] === 'i') count++;
*/
if( 'AI'.includes(user.firstName.toUpperCase()[0])) count++;
}
console.log(count);




let count1 = 0;
for (const email of users){
    if (email.email.includes('@gmail')) count1++;
}
console.log(count1);


//

let countMonth = 0;
for(const user of users){
 if ((parseInt(user.dob.split('-')[1])) <=3) countMonth++;
}
console.log(countMonth);


const user = 
    {
        "id": 1900,
        "firstName": "Yurii",
        "lastName": "Bazhenov",
        "email": "bazhenovyura333@gmail.com",
        "dob": "2023-08-04"
    };


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for(const key of Object.keys(user) ){
    console.log(`${key} / ${user[key]}`);
}

for (const key in user){
    console.log(user[key]);
}


for(const key of Object.keys(user) ){
    console.log(value);
}

for (const [key, value] of Object.entries(user)){
    console.log(`The key is '${key}' and the value for that key is '${value}'`)
}