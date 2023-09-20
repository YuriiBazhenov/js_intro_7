

// Create a simple to-do list
// Objective is to practice OOP classes and callbacks, promises and async await
/*
    Step 1: Create a class Task and TaskManager
    Step 2: Task manager will have a properties of: id, title, description, createdAt()
*/




class Todo {
    constructor (id, title, description){
        this.id = id
        this.title = title
        this.description = description
        this.createAt = new Date();
    }

}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

class TodoManager {
    constructor(){
        this.AllTodos = []
    }
    createATodo(newTodo, callback){
        let randomNumber = getRandomIntInclusive(10, 20)
        return new Promise ((resolve, reject) => {
        setTimeout(() => {
      resolve(randomNumber)

    }, 5000)
})

}
};

const todoManager = new TodoManager();
todoManager.createATodo(new Todo(1, 'Watch TV', 'On weekend and this show'))

.then(num => {
    console.log(num)
    if (num > 15) console.log('Number is valid')
    else console.log('Number is invalid')
})
.catch(err => console.log(err))


