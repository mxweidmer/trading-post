import React, {Component} from "react";
import landing from "./pages/landing"
import profile from "./pages/profile"
import usersearch from "./pages/usersearch"
import search from "./pages/search"
import noMatch from "./pages/noMatch"
import postitem from "./pages/postitem"
import Nav from "./components/Nav";
import Signup from "./components/SignUp";
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  state = {
    isLoggedIn: false,
    username: ""
  }


  logout = () => {
    API.logout().then(res => {
    })
  }

  render (){
    return(
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={landing} />          
          <Route exact path="/trading-post/profile" component={profile} />
          <Route exact path="/trading-post/search" component={search} />
          <Route exact path="/trading-post/usersearch" component={usersearch} />
          <Route exact path="/trading-post/postitem" component={postitem} />
          <Route component={noMatch} />        
        </Switch>
      </div>
    </Router>
    )
  }
  
}

export default App;
