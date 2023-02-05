import React from 'react';
import "./BottomNav.css";
import { NavLink } from 'react-router-dom';
import { HomeOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const BottomNav = () => {
  return (
    <div className="bottom-nav-wrapper">
      <nav className="bottom-nav">
        <NavLink 
          to="/"
          className="nav-link"
          activeclassname="active"
        >
          <HomeOutlined />
        </NavLink>
        <NavLink 
          to="/page-1"
          className="nav-link"
          activeclassname="active"
        >
          <QuestionCircleOutlined />
        </NavLink>
        <NavLink 
          to="/page-2"
          className="nav-link"
          activeclassname="active"
        >
          <QuestionCircleOutlined />
        </NavLink>
        <NavLink 
          to="/page-3"
          className="nav-link"
          activeclassname="active"
        >
          <QuestionCircleOutlined />
        </NavLink>
      </nav>
    </div>
  )
}

export default BottomNav;