import React, { Component } from "react";
import API from "../utils/API";
import {withRouter} from 'react-router-dom';
import './style.css'

const formStyle = {
   padding: "20px",
    margin: "auto",
    marginTop: "30px",
    backgroundColor: "lightblue",
    boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

class signin extends Component {

  state = {
    userName: "",
   password: "" 
  }
  
  handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
        [name]: value
     });
  };

  handleFormSubmit = async (event) => {
     event.preventDefault();
     if (this.state.userName && this.state.password ) {
            const signinData={
               userName : this.state.userName,
               password: this.state.password,
            }    

            await API.signin(signinData).then(res => {
               console.log({res}, 'login res');

               sessionStorage.setItem("UserId", res.data.user_id)

               this.setState({
                  userName: "",
                  password: ""  
               });
               
               this.props.history.push(`/trading-post/profile/${res.data.user_id}`);
               
            });
     } 
  };

  render() {

     return (
        <div class="container" style={formStyle}>
           <form>
              <h2 className="center-align">Sign In</h2>
              <input
                 value={this.state.userName}
                 onChange={this.handleInputChange}
                 name="userName"
                 placeholder="Username"
                 type="text"
              />             
              
              <input
                 value={this.state.password}
                 onChange={this.handleInputChange}
                 name="password"
                 placeholder="Password"
                 type="password"
              />                          
              
              <button className="waves-effect waves-light btn-small" onClick={this.handleFormSubmit}>
                 Sign In
              </button>
           </form>
        </div>
     );
  }
}

export default withRouter(signin);

