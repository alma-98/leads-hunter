import { ipcMain } from "electron";
import LeadRepository from "../repositories/LeadRepository.js";

const repo = new LeadRepository();

ipcMain.handle("import:csv", async (_, rows) => {

  let success = 0;
  let failed = 0;

  for (const row of rows) {
    try {
      repo.create({
        business: row.business || row.Business || "",
        category: row.category || "",
        email: row.email || "",
        phone: row.phone || "",
        website: row.website || "",
        address: row.address || "",
        city: row.city || "",
        province: row.province || "",
        rating: Number(row.rating || 0),
        reviews: Number(row.reviews || 0),
      });

      success++;

    } catch (err) {
      failed++;
    }
  }

  return {
    success,
    failed,
    total: rows.length
  };

});
