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
