const path = require('path');
const { app, BrowserWindow } = require('electron')

function createWindow() {
   const mainWindow = new BrowserWindow({
        title: 'Image Resizer',
        width: 500,
        height: 600,
   });

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(createWindow);