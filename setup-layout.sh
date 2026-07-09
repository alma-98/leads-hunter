#!/bin/bash

echo "========================================"
echo " Leads-Hunter - PART 2A"
echo " Layout & Routing"
echo "========================================"

mkdir -p src/app
mkdir -p src/layouts
mkdir -p src/routes

mkdir -p src/components/layout

mkdir -p src/pages/Dashboard
mkdir -p src/pages/LeadFinder
mkdir -p src/pages/LeadDatabase
mkdir -p src/pages/Broadcast
mkdir -p src/pages/SMTP
mkdir -p src/pages/Reports
mkdir -p src/pages/Settings
mkdir -p src/pages/Contact
mkdir -p src/pages/About

cat > src/app/App.tsx <<'APP'
import AppRouter from "../routes";

export default function App() {
  return <AppRouter />;
}
APP

cat > src/routes/index.tsx <<'APP'
import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import LeadFinder from "../pages/LeadFinder";
import LeadDatabase from "../pages/LeadDatabase";
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
APP

cat > src/layouts/MainLayout.tsx <<'APP'
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
return (

<div className="flex min-h-screen">

<Sidebar />

<div className="flex flex-col flex-1">

<Topbar />

<main className="flex-1 p-8 bg-slate-100">

<Outlet />

</main>

<Footer />

</div>

</div>

);
}
APP

cat > src/components/layout/Sidebar.tsx <<'APP'
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
APP

cat > src/components/layout/Topbar.tsx <<'APP'
export default function Topbar(){

return(

<header className="bg-white border-b h-16 px-8 flex items-center justify-between">

<h2 className="font-semibold">

Investment Technology Indonesia

</h2>

<div>

Admin

</div>

</header>

)

}
APP

cat > src/components/layout/Footer.tsx <<'APP'
export default function Footer(){

return(

<footer className="bg-white border-t h-14 flex items-center justify-center">

© 2026 Leads-Hunter

</footer>

)

}
APP

for page in Dashboard LeadFinder LeadDatabase Broadcast SMTP Reports Settings Contact About
do

cat > src/pages/$page/index.tsx <<PAGE
export default function $page(){

return(

<div>

<h1 className="text-3xl font-bold">

$page

</h1>

</div>

)

}
PAGE

done

echo ""
echo "========================================"
echo " PART 2A Complete"
echo "========================================"

