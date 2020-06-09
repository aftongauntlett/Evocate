import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/views/home";
import Themes from "./components/views/themes";
import Play from "./components/views/home";
// import Search from "./components/Views/Search";


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

          <Route path="/themes">
            <Themes />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/play">
            <Play />
          </Route>

        </Switch>
      </div>
    </HashRouter>
  );
}
