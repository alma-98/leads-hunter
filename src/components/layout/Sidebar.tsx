import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Search,
  Database,
  Users,
  Mail,
  Send,
  BarChart3,
  Settings,
  Phone,
  Info
} from "lucide-react";

const menus = [

  {
    to:"/",
    label:"Dashboard",
    icon:LayoutDashboard
  },

  {
    to:"/lead-finder",
    label:"Lead Finder",
    icon:Search
  },

  {
    to:"/database",
    label:"Lead Database",
    icon:Database
  },

  {
    to:"/leads",
    label:"Lead Management",
    icon:Users
  },

  {
    to:"/broadcast",
    label:"Broadcast",
    icon:Mail
  },

  {
    to:"/smtp",
    label:"SMTP",
    icon:Send
  },

  {
    to:"/reports",
    label:"Reports",
    icon:BarChart3
  },

  {
    to:"/settings",
    label:"Settings",
    icon:Settings
  },

  {
    to:"/contact",
    label:"Contact",
    icon:Phone
  },

  {
    to:"/about",
    label:"About",
    icon:Info
  }

];

export default function Sidebar(){

  return(

    <aside className="w-72 bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold">

          Leads Hunter

        </h1>

        <p className="text-xs text-slate-400 mt-2">

          Investment Technology Indonesia

        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menus.map((item)=>{

          const Icon=item.icon;

          return(

            <NavLink
              key={item.to}
              to={item.to}
              end={item.to==="/"}
              className={({isActive})=>

                `flex items-center gap-3 rounded-lg px-4 py-3 transition

                ${
                  isActive
                  ? "bg-cyan-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
                }`

              }

            >

              <Icon size={20}/>

              <span>

                {item.label}

              </span>

            </NavLink>

          );

        })}

      </nav>

      <div className="p-4 border-t border-slate-800 text-xs text-slate-500">

        Version 1.0.0

      </div>

    </aside>

  );

}
