const LeadRepository = require("../repositories/LeadRepository");

class LeadService {

  constructor() {
    this.repository = new LeadRepository();
  }

  getAll() {
    return this.repository.findAll();
  }

}

module.exports = LeadService;
