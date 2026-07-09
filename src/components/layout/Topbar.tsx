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
