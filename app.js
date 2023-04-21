const { app, BrowserWindow, ipcMain } = require('electron')
const url = require('url')
const path = require('path')


let mainWindow;

let todos = []

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 800,
        height: 550
    })
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "pages/mainWindow.html"),
        protocol: "file:",
        slashes: true
    }))

    ipcMain.on('newTodo', (err, data)=>{
        if(data){
            let todo = {
                id: todos.length + 1,
                text: data
            }
            todos.push(todo)

            mainWindow.webContents.send('todoItems', todo)
        }
    })

})






