import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


export default function DashboardLayout() {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
