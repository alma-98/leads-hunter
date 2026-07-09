#!/bin/bash

echo "======================================"
echo "Leads-Hunter PART 3E"
echo "Data Layer"
echo "======================================"

mkdir -p src/repositories
mkdir -p src/models

cat > src/models/Lead.ts <<'EOT'
export interface Lead {
  id?: number;
  business: string;
  category: string;
  phone: string;
  website: string;
  email: string;
  city: string;
  province: string;
  address: string;
}
EOT

cat > src/repositories/LeadRepository.ts <<'EOT'
import type { Lead } from "../models/Lead";

export class LeadRepository {
  async findAll(): Promise<Lead[]> {
    return [];
  }

  async save(_lead: Lead): Promise<void> {}

  async deleteAll(): Promise<void> {}
}
EOT

echo ""
echo "PART 3E Complete"
