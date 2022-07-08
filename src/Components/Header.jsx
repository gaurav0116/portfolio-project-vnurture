import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  // Active Link
  const ActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#2978b5" : ""
    };
  };

  return (
    <header className="header">
      <h3>
        <NavLink style={{ color: "#2978b5", textDecoration: "none" }} to="/">
          GD
        </NavLink>
      </h3>
      <nav className="menuItems">
        <ul className="navList">
          <NavLink className="navList-item" to="/project" style={ActiveLink}>
            Project
          </NavLink>
          <NavLink className="navList-item" to="/skills" style={ActiveLink}>
            Skills
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
