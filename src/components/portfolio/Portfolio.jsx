import React from "react";
import "./portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="project">
          <div className="item">
            <img src="assets/DinoJump!.png" alt="DinoJump! logo" />
            <h3>DinoJump!</h3>
          </div>
          <div className="buttons">
            <a href="https://adrianpconde.github.io/DinoJump/">
              <button className="btnDemo">Demo</button>
            </a>
            <a href="https://github.com/adrianpconde/DinoJump">
              <button className="btnCode">Code</button>
            </a>
          </div>
        </div>
        <div className="project">
          <div className="item">
            <img src="assets/tv-tracker.png" alt="TV-TRACKER App" />
            <h3>TV-TRACKER</h3>
          </div>
          <div className="buttons">
            <a href="https://tvtrackerweb.herokuapp.com/">
              <button className="btnDemo">Demo</button>
            </a>
            <a href="https://github.com/tv-track/tv-tracker">
              <button className="btnCode">Code</button>
            </a>
          </div>
        </div>
        <div className="project">
          <div className="item">
            <img src="assets/shipping-bids.png" alt="Shipping Bids" />
            <h3>Shipping-Bids</h3>
          </div>
          <div className="buttons">
            <a href="https://shipping-bids.herokuapp.com/">
              <button className="btnDemo">Demo</button>
            </a>
            <a href="https://github.com/shippingbids-app/shipping-bids-app">
              <button className="btnCode">Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
