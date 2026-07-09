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
