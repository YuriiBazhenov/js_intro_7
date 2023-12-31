const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

console.log(users.length); // 4

// Count how many users are older than 30   -> 2
// Count how many users live in Chicago     -> 2
// Find and store all the users name younger than 35    -> [ 'Tech', 'Jane', 'Alex' ]
// Find average of ages of all users    -> 28

let count = 0;

for(const user of users){
    if (user.age > 30) count++;
}
console.log(count);


let counter = 0;

for (const user of users){
    if (user.address.city.toLowerCase() === 'chicago') counter++;
}
console.log(counter);


const array = [];

for (const user of users){
    if (user.age < 35) array.push(user.firstName);
}
console.log(array);


let average = null;

for (const user of users){
    if (average += user.age );
}
console.log(average / users.length);