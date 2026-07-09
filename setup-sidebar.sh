#!/bin/bash

echo "=================================="
echo "Leads-Hunter PART 2B.1"
echo "Modern Sidebar + Topbar"
echo "=================================="

cat > src/components/layout/Sidebar.tsx <<'EOT'
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  Database,
  Mail,
  Send,
  BarChart3,
  Settings,
  Phone,
  Info,
} from "lucide-react";

const menus = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/lead-finder", label: "Lead Finder", icon: Search },
  { to: "/database", label: "Lead Database", icon: Database },
  { to: "/broadcast", label: "Broadcast", icon: Mail },
  { to: "/smtp", label: "SMTP", icon: Send },
  { to: "/reports", label: "Reports", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/contact", label: "Contact", icon: Phone },
  { to: "/about", label: "About", icon: Info },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">Leads-Hunter</h1>
        <p className="text-xs text-slate-400 mt-1">
          Investment Technology Indonesia
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
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
EOT

cat > src/components/layout/Topbar.tsx <<'EOT'
import { Search, Bell, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          className="w-full rounded-lg border pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Search leads..."
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-slate-600" size={20} />

        <div className="flex items-center gap-2">
          <UserCircle2 size={34} />
          <div>
            <div className="font-semibold">Alma</div>
            <div className="text-xs text-slate-500">
              Administrator
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
EOT

echo ""
echo "=================================="
echo "Sidebar & Topbar Updated"
echo "=================================="
