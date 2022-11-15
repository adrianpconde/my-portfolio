import React from "react";
import "./resume.scss";

function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="left">
        <h1>About me</h1>
        <br />
        <p>
          Journalist by vocation, curious and enthusiastic about new
          technologies and web development, I like to spend my free time
          learning new things. I have a Bachelor's Degree in <b>Journalism</b>{" "}
          and another one in <b>Communication and Media Studies</b>. After
          several years working in media, I'm seeking new horizons and
          opportunities on web development world. Due to my restless mind, I
          wanted to go further in my professional career and began learning by
          myself. I also studied the{" "}
          <b>Full Stack Web Development Bootcamp at Ironhack</b>, where I did my
          first projects and learned a lot of new and exciting things about
          coding.
        </p>
        <h3>
          I'm looking for an organization that moves fast, gives{" "}
          <u>time and resources to learn and grow</u>, with exciting products,
          and <u>teamwork values</u>. In short, a work environment that fosters
          collaboration and learning.
        </h3>
        <div class="downloadButton">
          <a
            href="https://drive.google.com/file/d/1vjfTg9ofPTgvXYFzxD8kOpqXKWQczrj4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">Check my resume</button>
          </a>
        </div>
      </div>
      <div className="right">
        <h1>Dev Skills</h1>
        <img src="assets/dev-skills.png" alt="Dev Skills" />
      </div>
    </div>
  );
}

export default Resume;
