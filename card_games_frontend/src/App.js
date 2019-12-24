import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import War from "./components/War";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/war">War</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/war">
            <War />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
