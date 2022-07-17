import Sidebar from "./Sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 max-h-screen bg-[#F9F9F9]">{children}</div>
    </div>
  );
};

export default Layout;
