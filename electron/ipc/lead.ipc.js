import { ipcMain } from "electron";
import LeadService from "../services/LeadService.js";

const service = new LeadService();

export function registerLeadIPC() {

  ipcMain.handle("lead:get-all", () => {
    return service.getAll();
  });

  ipcMain.handle("lead:get", (_, id) => {
    return service.getById(id);
  });

  ipcMain.handle("lead:count", () => {
    return service.count();
  });

  ipcMain.handle("lead:create", (_, data) => {
    return service.create(data);
  });

  ipcMain.handle("lead:update", (_, id, data) => {
    return service.update(id, data);
  });

  ipcMain.handle("lead:delete", (_, id) => {
    return service.delete(id);
  });

  ipcMain.handle("lead:delete-all", () => {
    return service.removeAll();
  });

}
