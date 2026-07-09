#!/bin/bash

echo "==========================================="
echo "Leads-Hunter PART 3B"
echo "Lead Finder UI"
echo "==========================================="

mkdir -p src/features/leads/components
mkdir -p src/features/leads/pages

cat > src/pages/LeadFinder/index.tsx <<'EOT'
import { Search } from "lucide-react";
import { useState } from "react";

export default function LeadFinder() {

const [keyword,setKeyword]=useState("");

return(

<div className="space-y-8">

<div>

<h1 className="text-3xl font-bold">

Lead Finder

</h1>

<p className="text-slate-500 mt-2">

Find Business Leads from Keywords

</p>

</div>

<div className="bg-white rounded-xl border shadow-sm p-8">

<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

<input
className="border rounded-lg p-3"
placeholder="Keyword"
value={keyword}
onChange={(e)=>setKeyword(e.target.value)}
/>

<input
className="border rounded-lg p-3"
placeholder="Category"
/>

<input
className="border rounded-lg p-3"
placeholder="Province"
/>

<input
className="border rounded-lg p-3"
placeholder="City"
/>

<input
className="border rounded-lg p-3"
placeholder="Radius KM"
/>

<button
className="bg-cyan-600 text-white rounded-lg p-3 hover:bg-cyan-700 flex items-center justify-center gap-2"
>

<Search size={18}/>

Search Leads

</button>

</div>

</div>

<div className="bg-white rounded-xl border shadow-sm overflow-hidden">

<table className="w-full">

<thead className="bg-slate-100">

<tr>

<th className="p-4 text-left">Business</th>

<th className="p-4 text-left">Category</th>

<th className="p-4 text-left">Phone</th>

<th className="p-4 text-left">Website</th>

<th className="p-4 text-left">Email</th>

<th className="p-4 text-left">City</th>

</tr>

</thead>

<tbody>

<tr>

<td className="p-4 text-slate-400" colSpan={6}>

No leads found

</td>

</tr>

</tbody>

</table>

</div>

</div>

)

}
EOT

echo ""
echo "Lead Finder Created"
echo ""
