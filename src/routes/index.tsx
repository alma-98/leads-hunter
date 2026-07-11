import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import LeadFinder from "../pages/LeadFinder";
import LeadDatabase from "../pages/LeadDatabase";
import Leads from "../pages/Leads";
import Broadcast from "../pages/Broadcast";
import SMTP from "../pages/SMTP";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default function AppRouter() {
return (
<BrowserRouter>
<Routes>

<Route path="/" element={<MainLayout />}>

<Route index element={<Dashboard />} />

<Route path="lead-finder" element={<LeadFinder />} />

<Route path="database" element={<LeadDatabase />} />

<Route path="leads" element={<Leads />} />

<Route path="broadcast" element={<Broadcast />} />

<Route path="smtp" element={<SMTP />} />

<Route path="reports" element={<Reports />} />

<Route path="settings" element={<Settings />} />

<Route path="contact" element={<Contact />} />

<Route path="about" element={<About />} />

</Route>

</Routes>
</BrowserRouter>
);
}
