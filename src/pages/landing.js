//import React from 'react';
import React, { Component } from "react";

import CardRow from '../components/CardRow'
import { SearchBar } from '../components/Search'
import { Row, Container } from '../components/Grid';
import API from "../utils/API";
import { SearchBtn } from "../components/SearchBtn";
/* import 'react-dropdown/style.css'; */

class Landing extends Component {

  state = {
    returnedItems: [],
    searchTerm: "",
    pg: "Landing",
    selectedCategory: "General",
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
    console.log(this.state.selectedCategory);
    console.log(this.state.searchTerm);

    API.getSearchedItems(this.state.selectedCategory, this.state.searchTerm).then(res => {
      console.log(res.data);
      this.setState({ returnedItems: res.data })
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



  render() {
    return (
      <div className="container">
        <div>
          
          
          <form className="search">
          <div className="row">

            <div className="col s12 m5 l5" style={{'margin-top': '15px'}}>
              <select value={this.state.selectedCategory}
                onChange={(e) => this.setState({ selectedCategory: e.target.value })}>
                {this.state.categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>

            <div className="input-field col s12 m5 l5">
              <i class="material-icons prefix">search</i>
              <input id="search" type="search" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} required />
              <label for="search">Seach for items</label>
            </div>

            <div className="col s12 m2 l2" style={{'margin-top': '10px'}}>
            <SearchBtn
              onClick={this.handleFormSubmit}
            />
            </div>

          </div>
          </form>
     
        </div>

        {/*  <SearchBar></SearchBar> */}


        <div>

          <CardRow
            items={this.state.returnedItems} />

          {/*  <Postform></Postform>  */}
        </div>
      </div>
    )
  }

}

export default Landing;
