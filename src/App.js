import React, { Component } from "react";
import landing from "./pages/landing"
import profile from "./pages/profile"
import noMatch from "./pages/noMatch"
import postitem from "./pages/postitem"
import updateitem from "./pages/updateitem"
import item from "./pages/item"
import Nav from "./components/Nav";
import signin from "./pages/signin";
import signup from "./pages/signup";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


class App extends Component {

  state = {
    isLoggedIn: false,
    UserId: ""
  }

  UNSAFE_componentWillMount() {
    const UserId = sessionStorage.getItem("UserId")
    console.log('app', UserId)
    this.setState({
      isLoggedIn: UserId ? true : false,
      UserId: UserId
    });
    console.log(this.state, 'app state')
  }

  logout = () => {
    localStorage.removeItem("UserId");
    this.setState({
      isLoggedIn: false,
      UserId: ""
    });
  }

  render() {

    return (
      <Router>
        <div>
          <Nav isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route exact path="/trading-post/" component={landing} />
            <Route exact path="/trading-post/signin" component={signin} />
            <Route exact path="/trading-post/signup" component={signup} />
            <Route exact path="/trading-post/postitem/:id" component={postitem} />
            <Route exact path="/trading-post/updateitem/:id" component={updateitem} />
            <Route path="/trading-post/item/:id" component={item} />
            <Route path="/trading-post/profile/:id" component={profile} />
            <Route component={noMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

