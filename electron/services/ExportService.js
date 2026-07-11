import ExcelJS from "exceljs";
import path from "node:path";
import { app } from "electron";
import ExportRepository from "../repositories/ExportRepository.js";

const repo = new ExportRepository();

export default class ExportService {

  async exportExcel() {

    const workbook = new ExcelJS.Workbook();

    const sheet = workbook.addWorksheet("Leads");

    sheet.columns = [

      { header:"Business", key:"business", width:40 },

      { header:"Category", key:"category", width:25 },

      { header:"Email", key:"email", width:35 },

      { header:"Phone", key:"phone", width:25 },

      { header:"Website", key:"website", width:35 },

      { header:"Address", key:"address", width:40 },

      { header:"City", key:"city", width:25 },

      { header:"Province", key:"province", width:25 },

      { header:"Rating", key:"rating", width:12 },

      { header:"Reviews", key:"reviews", width:12 },

      { header:"Created", key:"created_at", width:22 }

    ];

    repo.getAll().forEach(row=>sheet.addRow(row));

    const file = path.join(
      app.getPath("downloads"),
      "Leads-Hunter.xlsx"
    );

    await workbook.xlsx.writeFile(file);

    return {

      success:true,

      file

    };

  }

}
