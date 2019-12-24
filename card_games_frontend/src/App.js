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

            <Link to="/war">War</Link>
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
      </div>
    </Router>
  );
}

export default App;
