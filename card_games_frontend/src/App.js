import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import War from "./components/War";
import Durak from "./components/Durak";
import Poker from "./components/Poker";
import Register from "./components/Register";

class App extends React.Component {
  state = {
    isLoggedIn: localStorage.token ? true : false,
    username: localStorage.username,
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
    localStorage.userUrl = "";

    this.setState({ isLoggedIn: false });
  };
  render() {
    const { isLoggedIn, showSignupForm, showLoginForm } = this.state;

    return (
      <Router basename="/card_games">
        <div className="App">
          <header className="App-header">
            <nav>
              <Link to="/" className="home-nav-link">
                Home
              </Link>
              <div>
                {" "}
                {!isLoggedIn ? (
                  <>
                    <div
                      className="login-btn"
                      onClick={() => this.showLoginForm()}
                    >
                      Login
                    </div>
                    <div
                      className="signup-btn"
                      onClick={() => this.showSignupForm()}
                    >
                      Sign up
                    </div>
                  </>
                ) : (
                  <div
                    className="logout-btn"
                    onClick={() => this.handleLogout()}
                  >
                    Logout
                    <br />
                    <span className="user-nav">
                      Signed in as, {localStorage.username}
                    </span>
                  </div>
                )}
                {showLoginForm && (
                  <Register
                    show={showLoginForm}
                    login={"login"}
                    onHide={() => this.showLoginForm()}
                    toggleForm={() => this.showLoginForm()}
                  />
                )}
                {showSignupForm && (
                  <Register
                    show={showSignupForm}
                    signup={"signup"}
                    onHide={() => this.showSignupForm()}
                    toggleForm={() => this.showSignupForm()}
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
