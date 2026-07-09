class LeadRepository {

  findAll() {
    return [];
  }

  save(data) {
    console.log("Save Lead", data);
  }

  deleteAll() {
    console.log("Delete All");
  }

}

module.exports = LeadRepository;
