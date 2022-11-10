import React from "react";
import "./topbar.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Topbar({ menuOpen, setMenuOpen, theme, toggleTheme }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {" "}
            adrianpconde
          </a>
          <div className="itemContainer">
            <AccountCircleIcon className="icon" />
            <span>+34 660 721 408</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>adrian.perez.conde22@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/adrianpconde/">
              <LinkedInIcon className="icon" />
              <span>My LinkedIn Profile</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/adrianpconde">
              <GitHubIcon className="icon" />
              <span>https://github.com/adrianpconde</span>

            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburgerBtn" onClick={() => setMenuOpen(!menuOpen)}>
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
