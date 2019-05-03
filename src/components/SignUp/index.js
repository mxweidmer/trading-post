import React, { Component } from "react";
import API from "../../utils/API";

class SignUp extends Component {

   state = {
      username: "",
      password: "",
      email:"",
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
      if (this.state.username && this.state.password && this.state.passwordConfirm && this.state.email) {
         if (this.state.password === this.state.passwordConfirm) {

/*
            user = () => {
               API.user().then(res => console.log(res));
             }
             login = loginData => {
               API.login(loginData).then(res => console.log(res));
             }
*/             
             const signupData={
                username : this.state.username,
                email : this.state.email,
                password: this.state.password
             }             
               API.signup(signupData).then(res => console.log(res));     
             
            this.setState({
               username: "",
               password: "",
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
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
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
               <button onClick={this.handleFormSubmit}>
                  Sign Up
               </button>
            </form>
         </div>
      );
   }
}

export default SignUp;