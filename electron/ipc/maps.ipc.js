import { ipcMain } from "electron";
import MapsService from "../services/MapsService.js";

const service = new MapsService();

ipcMain.handle("maps:start", (_, data) => {

  return service.start(data);

});

ipcMain.handle("maps:stop", () => {

  return service.stop();

});
