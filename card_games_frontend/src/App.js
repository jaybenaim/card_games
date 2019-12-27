import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import War from "./components/War";
import Durak from "./components/Durak";
import Poker from "./components/Poker";
import Register from "./components/Register";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Button } from "react-bootstrap";
class App extends React.Component {
  state = {
    isLoggedIn: window.localStorage["token"] ? true : false,
    showSignupForm: false,
    showLoginForm: false
  };
  showSignupForm = () => {
    const { showSignupForm } = this.state;
    this.setState({ showSignupForm: !showSignupForm });
  };
  showLoginForm = () => {
    const { showLoginForm } = this.state;
    this.setState({ showLoginForm: !showLoginForm });
  };

  handleLogout = () => {
    window.localStorage["token"] = "";
    window.localStorage["username"] = "";
    window.localStorage["id"] = "";

    this.setState({ isLoggedIn: false });
  };
  render() {
    const { isLoggedIn, showSignupForm, showLoginForm } = this.state;

    return (
      <Router basename="/card_games">
        <div className="App">
          <header className="App-header">
            <nav>
              <Link to="/">Home</Link>
              <div>
                {" "}
                {!isLoggedIn ? (
                  <div
                    className="login-btn"
                    onClick={() => this.showLoginForm()}
                  >
                    Login
                  </div>
                ) : (
                  <div
                    className="login-btn"
                    onClick={() => this.handleLogout()}
                  >
                    Logout
                  </div>
                )}
                {showLoginForm && (
                  <Register
                    show={showLoginForm}
                    onHide={() => this.showLoginForm()}
                  />
                )}
                {showSignupForm && (
                  <Register
                    show={showSignupForm}
                    onHide={() => this.showSignupForm()}
                  />
                )}
              </div>
            </nav>
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/war">
              <War />
            </Route>
            <Route exact path="/durak">
              <Durak />
            </Route>
            <Route exact path="/poker">
              <Poker />
            </Route>
          </Switch>
          <footer>
            <div>
              {" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/jaybenaim/card_games/issues"
              >
                Submit an issue
              </a>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
