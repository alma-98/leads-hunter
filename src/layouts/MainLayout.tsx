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
