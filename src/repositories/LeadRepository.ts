import type { Lead } from "../models/Lead";

export class LeadRepository {
  async findAll(): Promise<Lead[]> {
    return [];
  }

  async save(_lead: Lead): Promise<void> {}

  async deleteAll(): Promise<void> {}
}
