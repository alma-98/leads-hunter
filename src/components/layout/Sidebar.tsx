import { Link } from "react-router-dom";

const menus = [

["/","Dashboard"],
["/lead-finder","Lead Finder"],
["/database","Lead Database"],
["/broadcast","Broadcast"],
["/smtp","SMTP"],
["/reports","Reports"],
["/settings","Settings"],
["/contact","Contact"],
["/about","About"]

];

export default function Sidebar(){

return(

<div className="w-64 bg-slate-900 text-white p-6">

<h1 className="text-2xl font-bold mb-8">

Leads-Hunter

</h1>

<nav className="space-y-3">

{menus.map(([link,title])=>(

<Link
key={link}
to={link}
className="block hover:text-cyan-400"
>

{title}

</Link>

))}

</nav>

</div>

)

}
