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
