#!/bin/bash

echo "======================================"
echo "Leads-Hunter PART 3A"
echo "Service Foundation"
echo "======================================"

mkdir -p src/services
mkdir -p src/database
mkdir -p src/types

cat > src/types/Lead.ts <<'EOT'
export interface Lead {
  id?: number;
  name: string;
  category: string;
  phone: string;
  website: string;
  email: string;
  address: string;
  city: string;
  province: string;
}
EOT

cat > src/services/lead.service.ts <<'EOT'
import type { Lead } from "../types/Lead";

export async function getLeads(): Promise<Lead[]> {
  return [];
}

export async function saveLead(_lead: Lead): Promise<void> {
  console.log("Save Lead");
}
EOT

cat > src/services/email.service.ts <<'EOT'
export async function sendEmail() {
  console.log("Email Service Ready");
}
EOT

cat > src/services/export.service.ts <<'EOT'
export async function exportCSV() {
  console.log("Export CSV");
}

export async function exportExcel() {
  console.log("Export Excel");
}
EOT

cat > src/database/index.ts <<'EOT'
export function initializeDatabase() {
  console.log("SQLite Ready");
}
EOT

echo ""
echo "======================================"
echo "PART 3A COMPLETE"
echo "======================================"
