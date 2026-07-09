#!/bin/bash

echo "========================================"
echo "Leads-Hunter Dashboard"
echo "PART 2B.2.1"
echo "========================================"

cat > src/pages/Dashboard/index.tsx <<'EOT'
import {
Database,
Mail,
Send,
Users,
Search,
PlusCircle,
Download,
Settings
} from "lucide-react";

function Card({
title,
value,
icon
}:{
title:string;
value:string;
icon:React.ReactNode;
}){

return(

<div className="bg-white rounded-xl shadow-sm p-6 border">

<div className="flex justify-between">

<div>

<p className="text-slate-500 text-sm">

{title}

</p>

<h2 className="text-3xl font-bold mt-2">

{value}

</h2>

</div>

<div className="text-cyan-600">

{icon}

</div>

</div>

</div>

)

}

export default function Dashboard(){

return(

<div className="space-y-8">

<div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl text-white p-8">

<h1 className="text-4xl font-bold">

Leads-Hunter

</h1>

<p className="mt-2 opacity-90">

Investment Technology Indonesia

</p>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<Card
title="Total Leads"
value="0"
icon={<Users size={42}/>}
/>

<Card
title="Email Found"
value="0"
icon={<Mail size={42}/>}
/>

<Card
title="Campaign"
value="0"
icon={<Send size={42}/>}
/>

<Card
title="Database"
value="0"
icon={<Database size={42}/>}
/>

</div>

<div>

<h2 className="text-2xl font-bold mb-4">

Quick Actions

</h2>

<div className="grid md:grid-cols-4 gap-5">

<button className="bg-white border rounded-xl p-6 hover:bg-cyan-50 transition">

<Search className="mx-auto mb-3"/>

Lead Finder

</button>

<button className="bg-white border rounded-xl p-6 hover:bg-cyan-50 transition">

<PlusCircle className="mx-auto mb-3"/>

New Campaign

</button>

<button className="bg-white border rounded-xl p-6 hover:bg-cyan-50 transition">

<Download className="mx-auto mb-3"/>

Export Data

</button>

<button className="bg-white border rounded-xl p-6 hover:bg-cyan-50 transition">

<Settings className="mx-auto mb-3"/>

Settings

</button>

</div>

</div>

</div>

)

}
EOT

echo ""
echo "Dashboard Created"
echo ""
