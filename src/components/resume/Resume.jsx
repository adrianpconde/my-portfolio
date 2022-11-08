import React from "react";
import "./resume.scss";

function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="left">
        <h2>About me</h2>
        <br />
        <h4>
          Journalist by vocation since I was young, curious and enthusiastic
          about new technologies and web development, I like to spend my free
          time learning new things.
        </h4>
        <br />
        <h4>
          I have a Bachelor's Degree in <b>Journalism</b> and another one in{" "}
          <b>Communication and Media Studies</b>. After several years working in
          media, I'm seeking new horizons and opportunities on web development
          world.
        </h4>
        <br />
        <h4>
          Due to my restless mind, I wanted to go further in my professional
          career and began learning by myself. Then, I studied the{" "}
          <b>Full Stack Web Development Bootcamp at Ironhack</b>, where I did my
          first projects and learned a lot of new and exciting things about
          coding.
        </h4>
        <br />
        <h3>
          I'm looking for an organization that moves fast, gives{" "}
          <u>time and resources to learn and grow</u>, with exciting products,
          and <u>teamwork values</u>. In short, a work environment that fosters
          collaboration and learning.
        </h3>
        <div class="downloadButton">
          <button className="btn">
            <a href="https://drive.google.com/file/d/1JFyNvbVwFTzYlrIyR2N-bxNyvoZOcHB0/view?usp=sharing">
              Check my resume
            </a>
          </button>
        </div>
      </div>
      <div className="right">
        <h2>Dev Skills learned:</h2>
        <img src="assets/dev-skills.png" alt="Dev Skills" />
      </div>
    </div>
  );
}

export default Resume;
