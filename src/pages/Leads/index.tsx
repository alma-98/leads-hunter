import { useEffect, useState } from "react";

interface Lead {
  id:number;
  business:string;
  category:string;
  email:string;
  phone:string;
  website:string;
  city:string;
  province:string;
}

export default function Leads(){

    const [leads,setLeads]=useState<Lead[]>([]);

    useEffect(()=>{

        window.api.getLeads().then((data:any)=>{
            setLeads(data);
        });

    },[]);

    return(

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Lead Management
            </h1>

            <div className="bg-white rounded-xl shadow">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-3 text-left">Business</th>

                            <th className="p-3 text-left">Category</th>

                            <th className="p-3 text-left">Email</th>

                            <th className="p-3 text-left">Phone</th>

                            <th className="p-3 text-left">City</th>

                        </tr>

                    </thead>

                    <tbody>

                        {leads.map((lead)=>(

                            <tr
                                key={lead.id}
                                className="border-b hover:bg-gray-50"
                            >

                                <td className="p-3">{lead.business}</td>

                                <td className="p-3">{lead.category}</td>

                                <td className="p-3">{lead.email}</td>

                                <td className="p-3">{lead.phone}</td>

                                <td className="p-3">{lead.city}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}
