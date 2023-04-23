const { ipcRenderer } = require('electron')

const todoValue = document.getElementById('todoValue')
const addTodo = document.getElementById('addTodo')

addTodo.addEventListener('click', ()=>{
    ipcRenderer.send('newTodo', todoValue.value)
    todoValue.value = "";
})

ipcRenderer.on('todoItems', (err, todo)=>{

    let todoElement = document.createElement('li') 
    todoElement.innerHTML = todo.text

    const todos = document.getElementById('todos')
    let todoLi = todos.appendChild(todoElement)

    let deleteBtn = document.createElement('button')
    todoLi.appendChild(deleteBtn).innerHTML = "x"
    
    counterFunc()

    deleteBtn.addEventListener('click', e=>{
        if (confirm('Kayıdı silmek istediğinizden emin misiniz?')){
            e.target.parentNode.remove()
            counterFunc()
        }
    })
    
    
})

const counterFunc = () => {
    let getCounter = document.getElementById('todoValue')
    getCoutner.placeholder = `Toplam Todo: ${todos.children.length}`
}


