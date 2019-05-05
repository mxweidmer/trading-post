import React, { Component } from "react";
import API from "../utils/API";
import {withRouter} from 'react-router-dom';

class signup extends Component {

  state = {
     firstName:"",
     lastName:"",
     userName: "",
     password: "",
     email:"",
     phone:"",
     city:"",
     state:"",
     passwordConfirm: ""
  }

  
  handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
        [name]: value
     });
  };

  handleFormSubmit = event => {
     event.preventDefault();
     if (this.state.firstName && this.state.lastName && this.state.userName && this.state.password && this.state.passwordConfirm && this.state.email && this.state.phone && this.state.city && this.state.state) {

        if (this.state.password === this.state.passwordConfirm) {
      
            const signupData={
               firstName:this.state.firstName,
               lastName:this.state.lastName,
               userName : this.state.userName,
               password: this.state.password,
               email : this.state.email,
               phone : this.state.phone,
               city: this.state.city,
               state : this.state.state              

            }             
              API.signup(signupData).then(res => {
                  this.props.history.push("/");
                  console.log(res)
               });     
           
                 console.log(signupData);
              
           this.setState({
              firstName:"",
              lastName:"",
              userName: "",
              password: "",
              email:"",
              phone:"",
              city:"",
              state:"",
              passwordConfirm: ""
           });
        } else {
           console.log("Make sure your passwords match.")
        }
     } else {
        console.log("Fill out all fields.")
     }
  };

  render() {

     return (
        <div>
           <form>
           <input
                 value={this.state.firstName}
                 onChange={this.handleInputChange}
                 name="firstName"
                 placeholder="Firstname"
                 type="text"
              />
           <input
                 value={this.state.lastName}
                 onChange={this.handleInputChange}
                 name="lastName"
                 placeholder="Lastname"
                 type="text"
              />
              <input
                 value={this.state.userName}
                 onChange={this.handleInputChange}
                 name="userName"
                 placeholder="Username"
                 type="text"
              />
              <input
                 value={this.state.email}
                 onChange={this.handleInputChange}
                 name="email"
                 placeholder="Email"
                 type="Email"
              />
              <input
                 value={this.state.password}
                 onChange={this.handleInputChange}
                 name="password"
                 placeholder="Password"
                 type="password"
              />
              
              <input
                 value={this.state.passwordConfirm}
                 onChange={this.handleInputChange}
                 name="passwordConfirm"
                 placeholder="Confirm password"
                 type="password"
              />
              <input
                 value={this.state.phone}
                 onChange={this.handleInputChange}
                 name="phone"
                 placeholder="Phone"
                 type="text"
              />
              <input
                 value={this.state.city}
                 onChange={this.handleInputChange}
                 name="city"
                 placeholder="City"
                 type="text"
              />
              <input
                 value={this.state.state}
                 onChange={this.handleInputChange}
                 name="state"
                 placeholder="State"
                 type="text"
              />
              <button onClick={this.handleFormSubmit}>
                 Sign Up
              </button>
           </form>
        </div>
     );
  }
}

export default withRouter(signup);

