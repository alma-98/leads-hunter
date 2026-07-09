import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { registerLeadIPC } from "./ipc/lead.ipc.js";
import { registerDashboardIPC } from "./ipc/dashboard.ipc.js";
import "./ipc/import.ipc.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {

  const win = new BrowserWindow({

    width:1400,
    height:900,

    webPreferences:{

      preload:path.join(__dirname,"preload.js"),

      contextIsolation:true,

      nodeIntegration:false

    }

  });

  win.loadURL("http://localhost:5173");

}

app.whenReady().then(()=>{

    registerLeadIPC();

    registerDashboardIPC();

    createWindow();

    app.on("activate",()=>{

        if(BrowserWindow.getAllWindows().length===0){

            createWindow();

        }

    });

});

app.on("window-all-closed",()=>{

    if(process.platform!=="darwin"){

        app.quit();

    }

});
