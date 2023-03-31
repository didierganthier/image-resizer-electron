const path = require('path');
const os = require('os');
const fs = require('fs');
const resizeImg = require('resize-img');
const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron')

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

function createWindow() {
     const mainWindow = new BrowserWindow({
          title: 'Image Resizer',
          width: isDev ? 1000 : 500,
          height: 600,
          resizable: isDev,
          webPreferences: {
               nodeIntegration: true,
               contextIsolation: true,
               preload: path.join(__dirname, 'preload.js'),
             },
     });

     if (isDev) {
        mainWindow.webContents.openDevTools();
     }

     mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

function createAboutWindow() {
     const aboutWindow = new BrowserWindow({
          title: 'About Image Resizer',
          width: 300,
          height: 300,
          resizable: false,
          backgroundColor: 'white',
     });

     aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'));
}

app.whenReady().then(() => {
     createWindow()

     const mainMenu = Menu.buildFromTemplate(menu);
     Menu.setApplicationMenu(mainMenu);

     app.on('activate', () => {
          if (BrowserWindow.getAllWindows().length === 0) {
               createWindow()
          }
     })
})

const menu = [
     ...(isMac ? [{
          label: app.name,
          submenu: [
               {
                    label: 'About',
                    click: createAboutWindow
               }
          ]
     }] : []),
     {
          role: 'fileMenu'
     },
     ...(!isMac ? [{
          label: 'Help',
          submenu: [
               {
                    label: 'About',
                    click: createAboutWindow
               }
          ]
     }] : []),
]

ipcMain.on('image:resize', (e, options) => {
     options.dest = path.join(os.homedir(), 'imageresizer');
     resizeImage(options);
})

const resizeImage = async ({ imgPath, width, height, dest }) => {
     try {
          const newPath = await resizeImage(fs.readFileSync(imgPath), {
               width,
               height
          });

          const fileName = path.basename(imgPath);

          if(!fs.existsSync(dest)) {
               fs.mkdirSync(dest);
          }

          fs.writeFileSync(path.join(dest, fileName), newPath);

          mainWindow.webContents.send('image:done');

          shell.openPath(dest);

     } catch (err) {
          console.log(err);
     }
}

app.on('window-all-closed', () => {
     if (!isMac) {
          app.quit();
     }
});