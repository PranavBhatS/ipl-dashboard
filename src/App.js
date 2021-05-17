import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route> */}
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
