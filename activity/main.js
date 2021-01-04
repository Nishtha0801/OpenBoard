// terminal should be in activity
// createmain.js
// npm init -y
// npm install electron --save -dev
// in pacvkage,json file, add line electron . 

const electron = require("electron");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow(){
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            
        },
    })

    win.loadFile("index.html").then(function(){
        win.maximize();
    });
    win.webContents.openDevTools();
}
app.whenReady().then(createWindow);

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
})
app.on('activate',()=>{

    if(BrowserWindow.getAllWindows().length===0){
        createWindow()
    }
})