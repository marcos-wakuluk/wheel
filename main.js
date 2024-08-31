const { app, BrowserWindow } = require("electron");
const path = require("path");

app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  // if (process.env.NODE_ENV === "development") {
  win.loadURL("http://localhost:3000");
  // } else {
  //   win.loadURL(`file://${path.join(__dirname, "build/index.html")}`);
  // }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
