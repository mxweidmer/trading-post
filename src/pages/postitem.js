import React, { Component } from "react";
import Postform from '../components/Postform'
import PostFormBtn from '../components/PostFormBtn';
//import { Container} from "../Grid";

import { Container, Row } from '../components/Grid';
import API from "../utils/API";

class PostItem extends Component {

  state = {
    title: "",
    picture: "",
    description: "",
    selectedCategory: "General",
    condition: "",
    categories: ['General', 'Books', 'Electronics', 'Jewerly', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
  };



  render() {
    return (

      <Container>
        <div className="formCont">
          <h2> Post your Item </h2>
          <div className="row">
            <div className="input-field col s6">

              <input id="title" type="text" value={this.state.title} required />
              <label for="title">Add a Title</label>
            </div>
            <div className="input-field col s6">

              <input id="picture" type="text" required />
              <label for="picture">Add a Picture</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">

              <input id="Discription" type="text" required />
              <label for="Discription">Description</label>
            </div>
            <div className="row">
              <div className="input-field col s12">

                <input id="Condition" type="text" required />
                <label for="Condition">Condition</label>
              </div>
            </div>
            <div className="row">
              <div className="categorydrop">

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
                <label for="categorydrop">Choose a category</label>
              </div>
            </div>
            <button> </button>
          </div>

        </div>
      </Container>


      /*  <Postform> </Postform>  <PostFormBtn></PostFormBtn> */

    )
  }

}

export default PostItem;

