import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <div className="left " style={{ width: "200px" }}>
          sidebar menu
        </div>
        <main className="main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
