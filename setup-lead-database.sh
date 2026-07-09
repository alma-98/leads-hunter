#!/bin/bash

echo "========================================="
echo "Leads-Hunter PART 3C"
echo "Lead Database"
echo "========================================="

mkdir -p src/pages/LeadDatabase

cat > src/pages/LeadDatabase/index.tsx <<'EOT'
import { Download, Upload, Trash2, RefreshCw } from "lucide-react";

const sample = [
  {
    business: "PT Contoh Indonesia",
    email: "info@contoh.co.id",
    phone: "021-123456",
    city: "Jakarta"
  }
];

export default function LeadDatabase(){

return(

<div className="space-y-6">

<div className="flex items-center justify-between">

<div>

<h1 className="text-3xl font-bold">

Lead Database

</h1>

<p className="text-slate-500">

Manage your collected leads

</p>

</div>

<div className="flex gap-3">

<button className="flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-white">
<Upload size={18}/>
Import CSV
</button>

<button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white">
<Download size={18}/>
Export CSV
</button>

<button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white">
<RefreshCw size={18}/>
Refresh
</button>

<button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white">
<Trash2 size={18}/>
Delete All
</button>

</div>

</div>

<div className="overflow-hidden rounded-xl border bg-white shadow-sm">

<table className="w-full">

<thead className="bg-slate-100">

<tr>

<th className="p-4 text-left">Business</th>

<th className="p-4 text-left">Email</th>

<th className="p-4 text-left">Phone</th>

<th className="p-4 text-left">City</th>

</tr>

</thead>

<tbody>

{sample.map((lead,index)=>(

<tr key={index} className="border-t">

<td className="p-4">{lead.business}</td>
<td className="p-4">{lead.email}</td>
<td className="p-4">{lead.phone}</td>
<td className="p-4">{lead.city}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}
EOT

echo ""
echo "========================================="
echo "Lead Database Created"
echo "========================================="
