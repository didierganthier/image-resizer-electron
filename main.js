const path = require('path');
const { app, BrowserWindow } = require('electron')

const isMac = process.platform === 'darwin';

function createWindow() {
     const mainWindow = new BrowserWindow({
          title: 'Image Resizer',
          width: 500,
          height: 600,
     });

     mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
     createWindow()
   
     app.on('activate', () => {
       if (BrowserWindow.getAllWindows().length === 0) {
         createWindow()
       }
     })
   })

app.on('window-all-closed', () => {
     if (!isMac) {
          app.quit();
     }
});