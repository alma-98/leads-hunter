import { ipcMain } from "electron";
import LeadService from "../services/LeadService.js";

const service = new LeadService();

export function registerLeadIPC() {

  ipcMain.handle("lead:get-all", () => {
    return service.getAll();
  });

  ipcMain.handle("lead:count", () => {
    return service.count();
  });

  ipcMain.handle("lead:create", (_, data) => {
    return service.create(data);
  });

  ipcMain.handle("lead:delete-all", () => {
    return service.removeAll();
  });

}
