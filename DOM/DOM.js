

console.log("WINDOW")


// alert
// window.alert('Igor,How are you today?');

// prompt
/*
let result = window.prompt()
console.log(result)
*/
// confrirm

/*
let confrirmResult = window.confirm("Are you ready?")
console.log(confrirmResult)
*/


// innerWidth and innerHeigth

console.log(window.innerWidth)
console.log(window.innerHeight)


// scrollTo(x,y)

window.scrollTo(0,0)

// location - object

// window.location.reload();

console.log(window.localStorage.length); // 0 - empty

// set item into localStorage

window.localStorage.setItem('name', 'John');
window.localStorage.setItem('isLoggedIN', false);
window.localStorage.setItem('userId', 1233);
window.localStorage.setItem('userInfo', JSON.stringify({name: 'John', email: 'john@gmail.com'}));
window.localStorage.setItem('userWallletTypes', JSON.stringify (['apple', 'google', 'cc']));

// Get item from localStorage

console.log(window.localStorage.getItem('name'));
console.log(window.localStorage.getItem('isLoggerdIn'));
console.log(window.localStorage.getItem('userId'));
console.log(JSON.parse(window.localStorage.getItem('userInfo')));
console.log(JSON.parse(window.localStorage.getItem('userWalletTypes')));


// remove item from localStorage

console.log(window.localStorage.removeItem('name'));

console.log(window.localStorage.clear());


/*
Activity 


1. Ask user a name
2. Alert users name

3. Confirm if user wants to continue 

*/

const userName = window.prompt('What is your name?');
console.log(userName)
if(userName){
    console.log('succes')
    window.alert(`Hi ${userName}.Welcome to our webpage`)
    const doesUrer = window.confirm('Do you want continue browsing our webpage');
    if (doesUrer){
        window.alert('You have chosen to continue')
    }else{
        window.alert('You canceled the action')
    }


const userinnerHeight = window.innerHeight
const userinnerWidth = window.innerWidth

console.log(`Your device dimension are heigt ${userinnerHeight} and width ${userinnerWidth}`);

const askIfUser = window.confirm("Do you wanna go to another page?")
if (askIfUser){
    setTimeout(() => {
        window.open('https://google.com')
        
    }, 10000);
} else {
    setTimeout(() => {
        window.location.reload()
    }, 10000);
}

}else{
    console.log('failed')
}



