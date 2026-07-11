import db from "../database/database.js";

export default class ExportRepository {

  getAll() {

    return db.prepare(`
      SELECT
        business,
        category,
        email,
        phone,
        website,
        address,
        city,
        province,
        rating,
        reviews,
        created_at
      FROM leads
      ORDER BY id DESC
    `).all();

  }

}
