import React from "react";
import Header from "./header";
import Frooter from "./frooter";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="py-14">{children}</div>
      <Frooter />
    </div>
  );
};

export default Layout;
