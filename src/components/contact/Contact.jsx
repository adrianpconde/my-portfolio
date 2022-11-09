import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/coding.png" alt="" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <h5>Do you want to know more about me?</h5>
        <h4>
          Book a time in my calendar or send me an email{" "}
          <a href="mailto:adrian.perez.conde22@gmail.com">here</a>.
        </h4>
        <h5>It will be so nice to talk!</h5>
        <a href="https://calendly.com/adrianpconde">
          <button>Go to Calendly</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
