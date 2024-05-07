import { BarChart3, Code, Compass, Layers, LayoutDashboard, Mail, Presentation, ShieldEllipsis, UsersRound } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebarLinks = () => {
  const [isActive, setIsActive] = useState(0);

  const adminLinks = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={18} className="mr-2" />,
      path: "/admin",
    },
    {
      label: "All users",
      icon: <UsersRound size={18} className="mr-2" />,
      path: "/admin/all-users",
    },
    {
      label: "All courses",
      icon: <Presentation size={18} className="mr-2" />,
      path: "/admin/all-courses",
    },
  ];
  return (
    <div>
      <div className="w-full">
        {adminLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsActive(i)}
            variant="outline"
            className={`w-full flex items-center justify-start px-4 py-3 border-none shadow-none hover:bg-[#f1f5f9] rounded-md transition-all ${
              isActive === i ? "bg-[--activeLink] text-black" : ""
            }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebarLinks;
