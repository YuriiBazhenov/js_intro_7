

const AskUserAList1 = window.prompt('Please enter a TODO');
const AskUserAList2 = window.prompt('Please enter a TODO');
const AskUserAList3 = window.prompt('Please enter a TODO');


console.log(AskUserAList1)
console.log(AskUserAList2)
console.log(AskUserAList3)


const newList = document.createElement('ul');

const li1 = document.createElement('li')
li1.textContent = AskUserAList1

const li2 = document.createElement('li')
li2.textContent = AskUserAList2


const li3 = document.createElement('li')
li3.textContent = AskUserAList3


newList.appendChild(li1)
newList.appendChild(li2)
newList.appendChild(li3)

document.body.appendChild(newList);