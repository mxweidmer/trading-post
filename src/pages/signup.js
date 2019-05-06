import React, { Component } from "react";
import API from "../utils/API";
import './style.css'

class signup extends Component {

   state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      description: "",
      passwordConfirm: "",
      profilePic: ""
   }


   handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
         [name]: value
      });
   };

   handleFormSubmit = async (event) => {
      event.preventDefault();
      if (this.state.firstName && this.state.lastName && this.state.userName && this.state.password && this.state.passwordConfirm && this.state.email && this.state.phone && this.state.city && this.state.state) {

         if (this.state.password === this.state.passwordConfirm) {

            const signupData = {
               firstName: this.state.firstName,
               lastName: this.state.lastName,
               userName: this.state.userName,
               password: this.state.password,
               email: this.state.email,
               phone: this.state.phone,
               city: this.state.city,
               state: this.state.state,
               description: this.state.description,
               profilePic: this.state.profilePic
            }

            console.log(signupData)

            await API.signup(signupData).then(res => {

               this.props.history.push(`/trading-post/signin`);
               console.log(res)
            });

            console.log(signupData);

            this.setState({
               firstName: "",
               lastName: "",
               userName: "",
               password: "",
               email: "",
               phone: "",
               city: "",
               state: "",
               description: "",
               passwordConfirm: "",
               profilePic: "",
               bio: ""
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
         <div className="container formContent">
            <form>
               <h2 className="center-align">Sign Up</h2>
               <div className="row">
                  <div className="input-field col s6">
                     <i class="material-icons prefix">person</i>
                     <input
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                     />
                  </div>
                  <div className="input-field col s6">
                     <input
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s12">
                     <i class="material-icons prefix">account_circle</i>
                     <input
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        name="userName"
                        placeholder="Username"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s12">
                     <i class="material-icons prefix">email</i>
                     <input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                        type="Email"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s6">
                     <i class="material-icons prefix">security</i>
                     <input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
                        type="password"
                     />
                  </div>
                  <div className=" input-field col s6">
                     <input
                        value={this.state.passwordConfirm}
                        onChange={this.handleInputChange}
                        name="passwordConfirm"
                        placeholder="Confirm password"
                        type="password"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s12">
                     <i class="material-icons prefix">phone</i>
                     <input
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        name="phone"
                        placeholder="Phone"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s6">
                     <i class="material-icons prefix">location_on</i>
                     <input
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="City"
                        type="text"
                     />

                  </div>

                  <div className="input-field col s6">

                     <input
                        value={this.state.state}
                        onChange={this.handleInputChange}
                        name="state"
                        placeholder="State"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="input-field col s12">
                     <i class="material-icons prefix">description</i>
                     <input
                        value={this.state.bio}
                        onChange={this.handleInputChange}
                        name="bio"
                        placeholder="Bio"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="input-field col s12">
                     <i class="material-icons prefix">picture</i>
                     <input
                        value={this.state.bio}
                        onChange={this.handleInputChange}
                        name="profilePic"
                        placeholder="Profile picture link"
                        type="text"
                     />
                  </div>
               </div>
               <button className="waves-effect waves-light btn-small" onClick={this.handleFormSubmit}>
                  Sign Up
              </button>
            </form>
         </div>
      );
   }
}

export default signup;

