import React from "react";
import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  const handleCloseMenu = () => setMenuOpen(false);
  
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleCloseMenu}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#resume">Resume</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
