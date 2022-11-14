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
            <a href="https://wa.me/34660721408" target="_blank"
              rel="noreferrer"> <span>+34 660 721 408</span></a>
           
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <a
              href="mailto:adrian.perez.conde22@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>Let's talk!</span>
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/adrianpconde/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="icon" />
              <span>My LinkedIn Profile</span>
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://github.com/adrianpconde"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="icon" />
              <span>adrianpconde</span>
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
