import type { Lead } from "../types/Lead";

export async function getLeads(): Promise<Lead[]> {
  return [];
}

export async function saveLead(_lead: Lead): Promise<void> {
  console.log("Save Lead");
}
