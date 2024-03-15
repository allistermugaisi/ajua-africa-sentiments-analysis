import React, { useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import { Navbar, Sidebar } from "../components";

import { useFindPath } from "../utils";

const DashboardLayout = () => {
  const location = useLocation();
  const findPath = useFindPath();

  const [width, setWidth] = useState(0);
  const [sidebar, setSidebar] = useState(!false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <main>
      <Sidebar sidebar={sidebar} width={width} toggleSidebar={toggleSidebar} />
      <Navbar sidebar={sidebar} />
    </main>
  );
};

export default DashboardLayout;
