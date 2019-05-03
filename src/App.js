import React from "react";
import landing from "./pages/landing"
import profile from "./pages/profile"
import usersearch from "./pages/usersearch"
import search from "./pages/search"
import noMatch from "./pages/noMatch"
import postitem from "./pages/postitem"
import Nav from "./components/Nav";
import signin from "./pages/signin";
import signup from "./pages/signup";

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
          <Route exact path="/trading-post/postitem" component={postitem} />
          <Route exact path="/trading-post/signin" component={signin} />
          <Route exact path="/trading-post/signup" component={signup} />
          <Route component={noMatch} />        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
