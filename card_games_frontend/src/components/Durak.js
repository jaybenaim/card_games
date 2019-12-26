import React, { Component } from "react";
import "../assets/stylesheets/durak.css";
class Durak extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="durak-container">
          <div className="game-table">
            <div className="outer-table">
              <div className="center-table"> </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Durak;
