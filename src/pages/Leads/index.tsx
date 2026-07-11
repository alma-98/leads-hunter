import { useEffect, useState } from "react";
import { exportExcel } from "../../services/export.service";

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

  async function loadLeads(){

    const data=await window.api.getLeads();

    setLeads(data);

  }

  useEffect(()=>{

    loadLeads();

  },[]);

  async function handleExport(){

    const result=await exportExcel();

    alert(
`Export berhasil!

Lokasi:

${result.file}`
    );

  }

  return(

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">

            Lead Management

          </h1>

          <p className="text-slate-500">

            Total Lead : {leads.length}

          </p>

        </div>

        <button
          onClick={handleExport}
          className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >

          Export Excel

        </button>

      </div>

      <div className="overflow-auto rounded-xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-3 text-left">Business</th>

              <th className="p-3 text-left">Category</th>

              <th className="p-3 text-left">Email</th>

              <th className="p-3 text-left">Phone</th>

              <th className="p-3 text-left">Website</th>

              <th className="p-3 text-left">City</th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead)=>(

              <tr
                key={lead.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-3">{lead.business}</td>

                <td className="p-3">{lead.category}</td>

                <td className="p-3">{lead.email}</td>

                <td className="p-3">{lead.phone}</td>

                <td className="p-3">{lead.website}</td>

                <td className="p-3">{lead.city}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}
