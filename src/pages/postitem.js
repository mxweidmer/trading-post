import React, { Component } from "react";
import { SearchBtn } from "../components/SearchBtn";
import Postform from '../components/Postform'
import PostFormBtn from '../components/PostFormBtn';
//import { Container} from "../Grid";

import { Container, Row } from '../components/Grid';
import API from "../utils/API";

class PostItem extends Component {

  state = {
    title: "",
    picture: null,
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

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    const fileUpload = new FormData();
    fileUpload.append("image", this.state.picture);
    console.log(this.state.selectedCategory);

    API.createNewItem({
      title: this.state.title,
      picture: fileUpload,
      description: this.state.description,
      category: this.state.selectedCategory,
      condition: this.state.condition
    }).then(res => {
      console.log(res.data);
      //this.setState({ returnedItems: res.data, searchTerm: "" });     
    })
  }


  render() {
    return (

      <Container>
        <form>
          <div className="formCont">
            <h2> Post your Item </h2>
            <div className="row">
              <div className="input-field col s6">

                <input id="title" type="text"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title" required />
                <label for="title">Add a Title</label>
              </div>
              <div className="input-field col s6">

                {/*  <input id="picture" type="text" required /> */}
                <input type="file" onChange={this.fileChangedHandler}></input>
                <label for="picture">Add a Picture</label>
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
                <div>
                  <select value={this.state.selectedCategory} id="dropdown"
                    onChange={(e) => this.setState({ selectedCategory: e.target.value })}>
                    {this.state.categories.map((category) => <option key={category} value={category}>{category}</option>)}
                  </select>
                </div>
              </div>
              <button className="btn" onClick={this.handleFormSubmit}>Add Item</button>
            </div>
          </div>
        </form>
      </Container>


      /*  <Postform> </Postform>  <PostFormBtn></PostFormBtn> */

    )
  }

}

export default PostItem;

