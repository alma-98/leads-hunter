import db from "../database/database.js";

export default class LeadRepository {

  findAll() {
    return db.prepare(
      "SELECT * FROM leads ORDER BY id DESC"
    ).all();
  }

  count() {
    return db.prepare(
      "SELECT COUNT(*) total FROM leads"
    ).get();
  }

  insert(data) {

    return db.prepare(`
      INSERT INTO leads (

        business,
        category,
        email,
        phone,
        website,
        address,
        city,
        province,
        rating,
        reviews

      )

      VALUES (

        @business,
        @category,
        @email,
        @phone,
        @website,
        @address,
        @city,
        @province,
        @rating,
        @reviews

      )
    `).run(data);

  }

  deleteAll() {
    return db.prepare(
      "DELETE FROM leads"
    ).run();
  }

}
