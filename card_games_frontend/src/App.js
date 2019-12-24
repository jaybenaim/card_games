import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import War from "./components/War";
function App() {
  return (
    <Router basename="/card_games">
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/war">
            <War />
          </Route>
        </Switch>
        <footer>
          <div>
            {" "}
            <a
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

export default App;
