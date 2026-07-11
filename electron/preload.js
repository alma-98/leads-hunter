const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  app: "Leads-Hunter",
  version: "1.0.0",

  ping: () => ipcRenderer.invoke("app:ping"),

  getLeads: () => ipcRenderer.invoke("lead:get-all"),

  createLead: (lead) => ipcRenderer.invoke("lead:create", lead),

  dashboardSummary: () => ipcRenderer.invoke("dashboard:summary"),

  importCsv: (rows) =>
    ipcRenderer.invoke("import:csv", rows),

  startMaps: (data) =>
    ipcRenderer.invoke("maps:start", data),

  stopMaps: () =>
    ipcRenderer.invoke("maps:stop"),

  exportExcel: () =>
    ipcRenderer.invoke("export:excel"),
});
