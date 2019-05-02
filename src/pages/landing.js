//import React from 'react';
import React, { Component } from "react";

import CardRow from '../components/CardRow'
import {SearchBar} from '../components/Search'
import { Row } from '../components/Grid';
import API from "../utils/API";

class Landing extends Component {
state = {
  returnedItems: [],
  searchTerm: "",
  pg: "Landing",
  categories: ['General', 'Books', 'Electronics', 'Jewerly', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
};


componentDidMount() {
  this.loadItems();
}

loadItems = () => {
  API.getRecentItems()
    .then(
      res => { 
        this.setState({ returnedItems: res.data, isLoaded: true }) 
        console.log(res.data)
      },
      error => {
        this.setState({ isLoaded: true, error });
      }
    )
  //.catch(err => console.log(err));
};

render(){
  return (
    <div>
    
     <Row>

      <SearchBar></SearchBar>
       </Row>
     
      <div className="container">
      
        <CardRow />

     {/*  <Postform></Postform>  */}
      </div>
    </div>
    )
  }
  
}

export default Landing;
