const { app, BrowserWindow, ipcMain } = require("electron");
const remote = require("@electron/remote/main");
const path = require("path");
const fs = require("fs");

remote.initialize();
function createWindow() {
  const win = new BrowserWindow({
    width: 860,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
  win.webContents.openDevTools();
  return win;
}
function createAnotherWindow(parent) {
  const win = new BrowserWindow({
    width: 600,
    height: 300,
    parent,
  });
  win.loadFile("second.html");
}
function handleSetTitle(event, title) {
  console.log("the event form ipcRenderer", event);
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}
async function handleWriteFile(event, content) {
  await fs.promises.writeFile("test.txt", content);
  const stats = await fs.promises.stat("test.txt");
  return stats.size;
}
app.on("ready", () => {
  // 单向通信 - 从渲染器进程到主进程
  ipcMain.on("set-title", handleSetTitle);
  // 双向通信 - 从渲染器进程到主进程, 再主进程到渲染器进程
  ipcMain.handle("write-file", handleWriteFile);
  const win = createWindow();
  remote.enable(win.webContents);
  // createAnotherWindow(parent);
  // 单向通信 -  从主进程到渲染器进程
  let counter = 0;
  win.webContents.send("update-counter", counter);
  setInterval(() => {
    counter += 2;
    win.webContents.send("update-counter", counter);
  }, 3000);
});
