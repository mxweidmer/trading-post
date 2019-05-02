import React from "react";
import { Container, Row } from "../Grid";
import style from "./style.css"



export function SearchBar(props){
return(
    <Container>
    <Row>
    <form>
      
   {/*  <div className = "categorydrop col s12 m2">
    <select className="browser-default">
    
      <option value="General">General</option>
      <option value="Books">Books</option>
      <option value="Electronics">Electronics</option>
      <option value="Jewerly">Jewerly</option>
      <option value="Tools">Tools</option>
      <option value="Clothing">Clothing</option>
      <option value="Furniture">Furniture</option>
     <option value="Games">Games</option>
     <option value="Sports Equipment">Sports Equipment</option>
      <option value="Appliances">Appliances</option>
  </select>
  </div>
   */}
      <div className="input-field col s12 m10">
     <i class="material-icons prefix">search</i>
      <input id="search" type="search" required />
      <label for="search">Seach for items</label>
    
      
  </div>
    

 
    
  </form>
  
  </Row>
  </Container>
)
}

