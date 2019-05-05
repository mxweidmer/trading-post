import React, {Component} from "react";
import landing from "./pages/landing"
import profile from "./pages/profile"
import usersearch from "./pages/usersearch"
import search from "./pages/search"
import noMatch from "./pages/noMatch"
import postitem from "./pages/postitem"
import updateitem from "./pages/updateitem"
import item from "./pages/item"
import Nav from "./components/Nav";
import SignedInNavBar from './components/SignedInNav'
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

  componentDidMount() {
    API.user()
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
        {/* {this.props.location.pathname === "/" ? <Nav /> : <SignedInNav />} */}
        <Nav />
        {/* <SignedInNavBar /> */}
        <Switch>
          {/* <PrivateRoute authed={this.state.isLoggedIn} exact path='/' component={landing} /> */}
          <Route exact path="/trading-post/" component={landing} />
          <Route exact path="/trading-post/signin" component={signin} />
          <Route exact path="/trading-post/signup" component={signup} />
          <Route exact path="/trading-post/postitem" component={postitem} />
          <Route exact path="/trading-post/updateitem" component={updateitem} />
          <Route exact path="/trading-post/item" component={item} />
          <Route path="/trading-post/profile/:id" component={profile} />
          <Route component={noMatch} />        
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
