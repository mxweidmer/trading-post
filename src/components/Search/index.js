import React from "react";
import { Container, Row } from "../Grid";
import style from "./style.css"



export function SearchBar(props){
return(
    <Container>
    <Row>
    <form>
        
    <div className="input-field">
    <i class="material-icons prefix">search</i>
      <input id="search" type="search" required />
      <label for="search">Seach for items</label>
    
      
    </div>
  </form>
  
  </Row>
  </Container>
)
}

export function SearchCategory(){
    return(
     <Container>
    <select className="browser-default">
    
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  </Container>
    )
}

export function SeachBtn(props) {
    return (
      <button {...props} style={{ margin:"auto" ,  }} className="btn " type="submit">
       Search {props.children}
      </button>
    );
  }