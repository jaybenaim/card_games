import React, { Component } from "react";
import "../assets/stylesheets/home.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-grid">
        <div className="foriegn">
          <strong>Foriegn</strong>
          <div className="durak-link-container">
            <Link to="/durak">
              <div className="durak-link-image"></div>
              Durak
            </Link>
          </div>
        </div>
        <div className="classics">
          <strong>Classics</strong>
          <div className="war-link-container">
            <Link to="/war">
              <div className="war-link-image"></div>
              War
            </Link>
          </div>
        </div>
        <div className="casino">
          <strong>Casino</strong>
          <div className="casino-link-container">
            <Link to="/poker">
              <div className="poker-link-image"></div>
              Poker
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
