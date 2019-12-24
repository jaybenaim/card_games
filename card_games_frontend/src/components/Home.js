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
        <div className="new-school">
          <strong>New-School</strong>
        </div>
      </div>
    );
  }
}

export default Home;
