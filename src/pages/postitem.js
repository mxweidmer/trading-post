import React, { Component } from "react";
import Postform from '../components/Postform'
import PostFormBtn from '../components/PostFormBtn'

import { Row } from '../components/Grid';
import API from "../utils/API";

class PostItem extends Component {
 
render(){
    return (
      <div>
    
       
        <div className="container">
        
  
    <Postform> </Postform>  <PostFormBtn></PostFormBtn> 
        </div>
      </div>
      )
    }
    
  }
  
  export default PostItem;
  
