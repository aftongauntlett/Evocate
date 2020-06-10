import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/views/home";
import Scoreboard from "./components/views/scoreBoard";
import Gameover from "./components/views/gameOver";
import Gamepage from "./components/views/gamePage";
import { HashRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    // using this to make github pages work
    <HashRouter basename="/">
      {/* importing the navbar */}
      <Navbar />
      {/* a switch to switch between pages */}
      <div>
        <Switch>
          <Route path="/scoreBoard">
            <Scoreboard />
          </Route>
          <Route path="/gamePage/:difficulty">
            <Gamepage />
          </Route>
          <Route path="/gameOver">
            <Gameover />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
