import React from "react";
import landing from "./pages/landing"
import profile from "./pages/profile"
import usersearch from "./pages/usersearch"
import search from "./pages/search"
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={landing} />
          <Route exact path="/trading-post/profile" component={profile} />
          <Route exact path="/trading-post/search" component={search} />
          <Route exact path="/trading-post/usersearch" component={usersearch} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
