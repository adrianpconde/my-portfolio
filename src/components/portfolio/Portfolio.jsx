import React from "react";
import "./portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="project">
          <div className="item">
            <img src="assets/DinoJump!.png" alt="" />
            <h3>DinoJump!</h3>
          </div>
          <div className="buttons">
            <button className="btn">
              <a href="https://adrianpconde.github.io/DinoJump/">DEMO</a>
            </button>
            <button className="btn">
              <a href="https://github.com/adrianpconde/DinoJump">CODE</a>
            </button>
          </div>
        </div>
        <div className="project">
          <div className="item">
            <img src="assets/tv-tracker.png" alt="" />
            <h3>TV-TRACKER</h3>
          </div>
          <div className="buttons">
            <button className="btn">
              <a href="https://tvtrackerweb.herokuapp.com/">DEMO</a>
            </button>
            <button className="btn">
              <a href="https://github.com/tv-track/tv-tracker">CODE</a>
            </button>
          </div>
        </div>
        <div className="project">
          <div className="item">
            <img src="assets/shipping-bids.png" alt="" />
            <h3>Shipping-Bids</h3>
          </div>
          <div className="buttons">
            <button className="btn">
              <a href="https://shipping-bids.herokuapp.com/">DEMO</a>
            </button>
            <button className="btn">
              <a href="https://github.com/shippingbids-app/shipping-bids-app">
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
