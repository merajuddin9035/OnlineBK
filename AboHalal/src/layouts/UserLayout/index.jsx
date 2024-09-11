import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";
const UserLayout = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <TopBar />
      <Outlet />
      <BottomBar />
    </div>
  );
};

export default UserLayout;
