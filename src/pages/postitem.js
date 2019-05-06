import React, { Component } from "react";

import { Container } from '../components/Grid';
import API from "../utils/API";



class PostItem extends Component {

  state = {
    title: "",
    picture: "",
    description: "",
    selectedCategory: "General",
    condition: "",
    categories: ['General', 'Books', 'Electronics', 'Jewelry', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
  };

  fileChangedHandler = event => {
    this.setState({ picture: event.target.files[0] })
  }

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  /* renderRedirect = () => {
   this.setState({
     redirect: true
   })
     return <Redirect to='/trading-post/profile'/>
   } */


  //form submit event handler
  handleFormSubmit = (event) => {
    event.preventDefault();
    /* const fileUpload = new FormData();
    fileUpload.append("image", this.state.picture); */
    console.log(this.state.selectedCategory);

    API.createNewItem(
      sessionStorage.getItem("UserId"),
      {
        _owner: sessionStorage.getItem("UserId"),
        title: this.state.title,
        picture: this.state.picture.length === 0 ? "https://www.pluggedin.com/images/content-image/placeholder_book.jpg" : this.state.picture,
        description: this.state.description,
        category: this.state.selectedCategory,
        condition: this.state.condition
      }).then(res => {
        console.log("The item was posted " + res.data);

        this.props.history.push(`/trading-post/profile/${sessionStorage.getItem("UserId")}`);
        //this.renderRedirect(); 
        //add later redirect to the profile page if the item was added sucessfully
        //this.setState({ returnedItems: res.data, searchTerm: "" });     
      })
  }


  render() {
    return (

      <Container>
        <form>
          <div className="formCont">
            <h3>Post your Item</h3>
            <div className="row">
              <div className="input-field col s6">

                <input id="title" type="text"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title" required />
                <label for="title">Add a Title</label>
              </div>

              <div className="input-field col s6">
                <div>
                  <select className="select-dropdown" value={this.state.selectedCategory} id="dropdown"
                    onChange={(e) => this.setState({ selectedCategory: e.target.value })}>
                    {this.state.categories.map((category) => <option key={category} value={category}>{category}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">

                <input id="Description" type="text" name="description" value={this.state.description} onChange={this.handleInputChange} required />
                <label for="Description">Description</label>
              </div>
              <div className="row">
                <div className="input-field col s12">

                  <input id="Condition" type="text" name="condition" value={this.state.condition} onChange={this.handleInputChange} required />
                  <label for="Condition">Condition</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="picture" type="text" name="picture" onChange={this.handleInputChange} value={this.state.picture} required />
                  <label for="picture">Add a Picture</label>
                </div>
              </div>
              <button className="btn" onClick={this.handleFormSubmit}>Add Item</button>
            </div>
          </div>
        </form>
      </Container>

    )
  }
}

export default PostItem;

