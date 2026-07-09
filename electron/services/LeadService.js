import LeadRepository from "../repositories/LeadRepository.js";

const repo = new LeadRepository();

export default class LeadService {

  getAll() {
    return repo.findAll();
  }

  count() {
    return repo.count();
  }

  create(data) {
    return repo.insert(data);
  }

  removeAll() {
    return repo.deleteAll();
  }

}
