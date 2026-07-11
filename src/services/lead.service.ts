import type { Lead } from "../types/Lead";

export async function getLeads(): Promise<Lead[]> {

  return await window.api.getLeads();

}

export async function saveLead(
  lead: Lead
): Promise<void> {

  await window.api.createLead(lead);

}
