import React, { Component } from "react";

class SignUp extends Component {

   state = {
      username: "",
      email:"",
      password: "",
      passwordConfirm: "",


   }

   handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
       [name]: value
    });
 };