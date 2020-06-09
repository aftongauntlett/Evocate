import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/views/home";
// import Discover from "./components/Views/Discover";
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
          {/* <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/search">
          <Search />
        </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
