import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

function Intro() {
  
  const textRef = useRef();
  
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ['& Junior Front-End Developer. ', '& Junior Full Stack Developer. '],
    });
  }, []);
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/adrian.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi! 👋 I'm</h2>
          <h1>Adrián Pérez Conde</h1>
          <h3>
            Journalist <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
