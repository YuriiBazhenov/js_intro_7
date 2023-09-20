

/**
 *  ACCESSING A DOM ELEMENTS
 */

/**
 * getElementById() - method
 * 
 */

const pageHeading = document.getElementById('page-heading');
console.log(pageHeading);

/*
 getElementByClassName() - method
*/

const container = document.getElementsByClassName('container')
console.log(container)

for(let i = 0; i < container.length; i++){
    console.log(`Node ${i}: ${container[i]}`)
}


/**
 *  getElementByTagName - method 
 */

const images = document.getElementsByTagName('img')
console.log(images);

for(let i = 0; i < images.length; i++){
    console.log(images[i])
}

const par1 = document.querySelector('#par1')
const par2 = document.querySelector('.par2')
const section = document.querySelector('section')

console.log(par1)
console.log(par2)
console.log(section)


/**
 * 
 */

const allImages = document.querySelectorAll('img')
console.log(allImages)