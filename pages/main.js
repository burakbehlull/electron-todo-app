const { ipcRenderer } = require('electron')

const todoValue = document.getElementById('todoValue')
const addTodo = document.getElementById('addTodo')

addTodo.addEventListener('click', ()=>{
    ipcRenderer.send('newTodo', todoValue.value)
})

ipcRenderer.on('todoItems', (err, todo)=>{
    let todoElement = document.createElement('li') 
    todoElement.innerHTML = todo.text
    const todos = document.getElementById('todos')
    .appendChild(todoElement)
})



