import db from "../database/database.js";

export default class LeadRepository {

  findAll() {
    return db.prepare(
      "SELECT * FROM leads ORDER BY id DESC"
    ).all();
  }

  findById(id) {
    return db.prepare(
      "SELECT * FROM leads WHERE id=?"
    ).get(id);
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

  update(id, data) {
    return db.prepare(`
      UPDATE leads
      SET
        business=@business,
        category=@category,
        email=@email,
        phone=@phone,
        website=@website,
        address=@address,
        city=@city,
        province=@province,
        rating=@rating,
        reviews=@reviews
      WHERE id=@id
    `).run({
      id,
      ...data,
    });
  }

  delete(id) {
    return db.prepare(
      "DELETE FROM leads WHERE id=?"
    ).run(id);
  }

  deleteAll() {
    return db.prepare(
      "DELETE FROM leads"
    ).run();
  }

}
