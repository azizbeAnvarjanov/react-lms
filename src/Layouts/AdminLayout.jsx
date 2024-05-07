import AdminSidebar from "@/pages/Admin/_components/AdminSidebar";
import Header from "@/pages/User/_components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <AdminSidebar />
      <div className="lg:pl-[18%]">
        <Outlet />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
