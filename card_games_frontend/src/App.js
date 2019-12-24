import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import War from "./components/War";
import Durak from "./components/Durak";
import Poker from "./components/Poker";
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

export default App;
