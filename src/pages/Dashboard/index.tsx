import KpiCards from "../../components/dashboard/KpiCards";
import RecentActivity from "../../components/dashboard/RecentActivity";
import CampaignProgress from "../../components/dashboard/CampaignProgress";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white">
        <h1 className="text-4xl font-bold">Leads-Hunter</h1>
        <p className="mt-2">
          Investment Technology Indonesia
        </p>
      </div>

      <KpiCards />

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentActivity />
        <CampaignProgress />
      </div>
    </div>
  );
}
