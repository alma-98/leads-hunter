const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  app: "Leads-Hunter",
  version: "1.0.0",

  ping: () => ipcRenderer.invoke("app:ping"),
});
