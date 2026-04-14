const { app, BrowserWindow, protocol, net } = require('electron')
const path = require('path')
const fs = require('fs')
const url = require('url')

const WWW_DIR = path.join(__dirname, 'www')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
    },
    title: 'QRS - QR Stream',
    show: false,
  })

  win.once('ready-to-show', () => win.show())
  win.setMenuBarVisibility(false)

  // SPA routing: redirect unknown file paths to index.html
  win.webContents.on('will-navigate', (event, navUrl) => {
    if (navUrl.startsWith('file://')) {
      const parsed = new URL(navUrl)
      const filePath = path.join(WWW_DIR, parsed.pathname)
      if (!fs.existsSync(filePath)) {
        event.preventDefault()
        win.loadFile(path.join(WWW_DIR, 'index.html'))
      }
    }
  })

  win.loadFile(path.join(WWW_DIR, 'index.html'))
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
