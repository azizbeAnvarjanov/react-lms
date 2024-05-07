import Header from "@/pages/User/_components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const CourseDetailsLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-[70%] mx-auto">
        <Outlet />
        {children}
      </div>
    </div>
  );
};

export default CourseDetailsLayout;
