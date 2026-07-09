import db from "../database/database.js";

export default class DashboardService {

  summary() {

    const totalLeads = db.prepare(
      "SELECT COUNT(*) total FROM leads"
    ).get().total;

    const totalEmail = db.prepare(
      "SELECT COUNT(*) total FROM leads WHERE email IS NOT NULL AND email<>''"
    ).get().total;

    const totalWebsite = db.prepare(
      "SELECT COUNT(*) total FROM leads WHERE website IS NOT NULL AND website<>''"
    ).get().total;

    const totalCity = db.prepare(
      "SELECT COUNT(DISTINCT city) total FROM leads"
    ).get().total;

    return {
      totalLeads,
      totalEmail,
      totalWebsite,
      totalCity
    };

  }

}
