import { ipcMain } from "electron";
import ExportService from "../services/ExportService.js";

const service = new ExportService();

ipcMain.handle(
  "export:excel",
  () => service.exportExcel()
);
