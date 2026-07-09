import { ipcMain } from "electron";
import DashboardService from "../services/DashboardService.js";

const dashboard = new DashboardService();

export function registerDashboardIPC(){

    ipcMain.handle(
        "dashboard:summary",
        ()=>{
            return dashboard.summary();
        }
    );

}
