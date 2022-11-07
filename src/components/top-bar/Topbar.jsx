import React from "react";
import "./topbar.scss";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"> .adrianpconde</a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Topbar;
