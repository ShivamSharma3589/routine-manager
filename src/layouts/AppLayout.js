import React from "react";
import { BottomNav, TopNav } from "../components";

const AppLayout = ({ children }) => {
  return (
    <>
      <TopNav />
      {children}
      <BottomNav />
    </>
  );
};

export default AppLayout;
