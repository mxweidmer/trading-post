import React, {Component} from "react";
import landing from "./pages/landing"
import profile from "./pages/profile"
import usersearch from "./pages/usersearch"
import search from "./pages/search"
import noMatch from "./pages/noMatch"
import postitem from "./pages/postitem"
import item from "./pages/item"
import Nav from "./components/Nav";
import signin from "./pages/signin";
import signup from "./pages/signup";
import API from "./utils/API";
import PrivateRoute from './utils/PrivateRoute'

import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom";


class App extends Component {

  state = {
    isLoggedIn: false,
    userName: ""
  }

  async componentDidMount() {
    await API.user()
      .then(user => {
        console.log("User: ", user);
        this.setState({
          isLoggedIn: user.data.loggedIn,
          userName: user.data.userName
        }); 
      });
  }
  

  logout = () => {
    API.logout().then(res => {
    })
  }


  render (){

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <PrivateRoute authed={this.state.isLoggedIn} exact path='/' component={landing} />
          <Route exact path="/signin" component={signin} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/trading-post/profile" component={profile} />
          <Route exact path="/trading-post/search" component={search} />
          <Route exact path="/trading-post/usersearch" component={usersearch} />
          <Route exact path="/trading-post/postitem" component={postitem} />
          <Route exact path="/trading-post/item" component={item} />

          <Route component={noMatch} />      
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
