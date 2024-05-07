import Header from "@/pages/User/_components/Header";
import SideBar from "@/pages/User/_components/SideBar";
import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="lg:pl-[18%]">
        <Outlet />
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
