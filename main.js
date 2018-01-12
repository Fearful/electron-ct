#!/usr/bin/env electron

process.chdir(__dirname);

var electron = require("electron");

// When the electron app is ready execute our initialization
electron.app.on("ready", start);

function start() {
  // We call the build server in production
  var app = require("./build/web/server/server");

  // Local url to the instance
  var url = "http://localhost:8081/";
  var options = {
    width: 960,
    height: 640,
    webPreferences: {
      nodeIntegration: true
    }
  };

  // We pass our options to the browser window
  var main = new electron.BrowserWindow(options);

  // ensure it executes the quit command to free used memory on close
  main.on("closed", electron.app.quit);

  main.loadURL(url);
}
