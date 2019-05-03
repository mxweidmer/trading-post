import React, { Component } from "react";
import API from "../../utils/API";

class SignIn extends Component {

    state = {
        username:"",
        password : ""
    }

handleInputChange = event =>{
    const { name ,value} = event.target;
    this.setState ({
        [name]:value
    });
};





   };
/*
   render() {

      return (
         
      );
   }
   
}
*/

export default SignIn;