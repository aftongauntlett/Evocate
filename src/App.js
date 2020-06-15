import Favicon from "react-favicon";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/views/home";
import Scoreboard from "./components/views/scoreBoard";
import Themes from "./components/views/themes/index";
import { HashRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/views/footer";

export default function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <div>
        <Favicon />
        <Switch>
          <Route path="/scoreBoard">
            <Scoreboard />
          </Route>
          <Route path="/gamePage/:difficulty">
            <Themes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}
