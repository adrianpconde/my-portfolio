import React from "react";
import "./topbar.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {" "}
            .adrianpconde
          </a>
          <div className="itemContainer">
            <AccountCircleIcon className="icon" />
            <span>+34 660 721 408</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>adrian.perez.conde22@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="lineOne"></span>
            <span className="lineTwo"></span>
            <span className="lineThree"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
