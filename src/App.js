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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import PrivateRoute from './utils/PrivateRoute'

class App extends Component {

  state = {
    isLoggedIn: false,
    userName: ""
  }

  UNSAFE_componentWillMount() {
       localStorage.getItem("username")
       const username = localStorage.getItem("username")
       console.log('app',username)
        this.setState({
          isLoggedIn: username ? true:false,
          userName: username
      });
      console.log(this.state, 'app state')
  }
  
  logout = () => {
    localStorage.removeItem("username");
    this.setState({
      isLoggedIn: false,
      userName: ""
  
  });
    
  }


  render (){

    console.log(this.state, 'app state in render')
  return (
    <Router>
      <div>
        <Nav />
        <SignedInNavBar />
        <Switch>
          <PrivateRoute authed={this.state.isLoggedIn} exact path='/' component={landing} />
          <Route exact path="/signin" component={signin} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/trading-post/profile" component={profile} />
          <Route exact path="/trading-post/search" component={search} />
          <Route exact path="/trading-post/usersearch" component={usersearch} />
          <Route exact path="/trading-post/postitem" component={postitem} />
          <Route exact path="/trading-post/updateitem" component={updateitem} />
          <Route exact path="/trading-post/item" component={item} />

          <Route component={noMatch} />      
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
