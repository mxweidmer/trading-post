//import React from 'react';
import React, { Component } from "react";

import CardRow from '../components/CardRow'
import {SearchBar} from '../components/Search'
import { Row, Container } from '../components/Grid';
import API from "../utils/API";
import { SearchBtn } from "../components/SearchBtn";
import { SearchCategory } from "../components/SearchCategory";

class Landing extends Component {
state = {
  returnedItems: [],
  searchTerm: " ",
  pg: "Landing",
  category: "General",
  categories: ['General', 'Books', 'Electronics', 'Jewerly', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
};
handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();

  API.getSearchedItems(this.state.category, this.state.searchTerm).then(res => {
    console.log(res);
    this.setState({ returnedBooks: res.data.items })
  })
};

componentDidMount() {
  this.loadItems();
}

loadItems = () => {
  API.getRecentItems()
    .then(
      res => { 
        this.setState({ returnedItems: res.data, isLoaded: true }) 
        // console.log(res.data)
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
    

     <form className="search">
          <SearchCategory></SearchCategory>

           <SearchBar
             value={this.state.searchTerm}
             onChange={this.handleInputChange}
             name="searchTerm"
             placeholder="Search for item"
           />
           <SearchBtn
             disabled={!(this.state.searchTerm)}
             onClick={this.handleFormSubmit}
           /> 
            
             
         </form>
     {/*  <SearchBar></SearchBar> */}
     
    
      <div className="container">
      
        <CardRow 
        items={this.state.returnedItems}/>

     {/*  <Postform></Postform>  */}
      </div>
    </div>
    )
  }
  
}

export default Landing;
