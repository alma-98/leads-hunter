import LeadRepository from "../repositories/LeadRepository.js";

const repo = new LeadRepository();

export default class LeadService {

  getAll() {
    return repo.findAll();
  }

  getById(id) {
    return repo.findById(id);
  }

  count() {
    return repo.count();
  }

  create(data) {
    return repo.insert(data);
  }

  update(id, data) {
    return repo.update(id, data);
  }

  delete(id) {
    return repo.delete(id);
  }

  removeAll() {
    return repo.deleteAll();
  }

}
