import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <div className="left bg-dark text-white " style={{ width: "200px" }}>
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
