#!/bin/bash

echo "======================================"
echo "Leads-Hunter PART 2B.2.2A"
echo "Dashboard KPI"
echo "======================================"

cat > src/components/dashboard/KpiCards.tsx <<'EOT'
import {
Users,
Mail,
Send,
Database
} from "lucide-react";

const cards = [

{
title:"Total Leads",
value:"0",
icon:<Users size={38}/>
},

{
title:"Email Found",
value:"0",
icon:<Mail size={38}/>
},

{
title:"Campaign",
value:"0",
icon:<Send size={38}/>
},

{
title:"Database",
value:"0",
icon:<Database size={38}/>
}

];

export default function KpiCards(){

return(

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

{cards.map((card,index)=>(

<div
key={index}
className="bg-white rounded-xl border shadow-sm p-6"
>

<div className="flex justify-between">

<div>

<p className="text-sm text-slate-500">

{card.title}

</p>

<h2 className="text-3xl font-bold mt-2">

{card.value}

</h2>

</div>

<div className="text-cyan-600">

{card.icon}

</div>

</div>

</div>

))}

</div>

)

}
EOT

cat > src/components/dashboard/RecentActivity.tsx <<'EOT'
const items=[

"Application initialized",

"Dashboard loaded",

"Lead Finder ready",

"Database connected",

"SMTP waiting configuration"

];

export default function RecentActivity(){

return(

<div className="bg-white rounded-xl border shadow-sm p-6">

<h2 className="text-xl font-bold mb-5">

Recent Activity

</h2>

<div className="space-y-4">

{items.map((item,index)=>(

<div
key={index}
className="flex items-center gap-3"
>

<div className="w-3 h-3 rounded-full bg-cyan-600"/>

<span>{item}</span>

</div>

))}

</div>

</div>

)

}
EOT

cat > src/components/dashboard/CampaignProgress.tsx <<'EOT'
export default function CampaignProgress(){

return(

<div className="bg-white rounded-xl border shadow-sm p-6">

<h2 className="text-xl font-bold mb-6">

Campaign Progress

</h2>

<div className="space-y-5">

<div>

<div className="flex justify-between">

<span>Email Campaign</span>

<span>0%</span>

</div>

<div className="bg-slate-200 rounded-full h-3 mt-2">

<div className="bg-cyan-600 h-3 rounded-full w-0"></div>

</div>

</div>

<div>

<div className="flex justify-between">

<span>Lead Collection</span>

<span>0%</span>

</div>

<div className="bg-slate-200 rounded-full h-3 mt-2">

<div className="bg-green-600 h-3 rounded-full w-0"></div>

</div>

</div>

</div>

</div>

)

}
EOT

echo ""
echo "Dashboard KPI Complete"
echo ""

