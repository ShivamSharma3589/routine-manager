import React from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top-bar-wrapper">
      <header className="top-bar">
        <div className="left-area">
          <button type="button" className="menu-button">
            <MenuUnfoldOutlined className="menu-icon" />
          </button>
          <div className="app-name">Routine Tracker</div>
        </div>
        <div className="right-area"></div>
      </header>
    </div>
  );
};

export default TopNav;
