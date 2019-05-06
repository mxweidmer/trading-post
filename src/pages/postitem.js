import React, { Component } from "react";

import { Container } from '../components/Grid';
import API from "../utils/API";
import styles from '../components/Postform/style.css';



class PostItem extends Component {

  /* constructor(props) {
    super(props);
    this.selectCategory = React.createRef();
  } */

  state = {
    title: "",
    picture: "",
    description: "",
    selectedCategory: "General",
    condition: "",
    categories: ['General', 'Books', 'Electronics', 'Jewelry', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
  };


  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //use this method to read userid for now, later can try to read it from the session !
  componentDidMount() {
    const { id } = this.props.match.params
    console.log("id " + id);  
    this.setState({_owner: id});
    //this.selectCategory.;
    
   
  } 


  //form submit event handler
  handleFormSubmit = (event) => {
    event.preventDefault();
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
        let path = "/trading-post/profile/" + this.state._owner;
        this.props.history.push(path);
        //this.renderRedirect(); 
        //add later redirect to the profile page if the item was added sucessfully
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
                  <select ref={this.selectCategory} className="select-dropdown"  value={this.state.selectedCategory} id="dropdown"
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
              <button className="waves-effect waves-light btn-small" onClick={this.handleFormSubmit}>Add Item</button>
            </div>
          </div>
        </form>
      </Container>

    )
  }
}

export default PostItem;

