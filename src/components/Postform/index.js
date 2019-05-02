import React from "react";
import { Container, Row } from "../Grid";
import style from './style.css';

export default class PostForm extends React.Component {
    state = {
       title: " ",
       picture: " ",
       description: " ",
       condition: " ",
       category: " ",

    };/* 
handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
    [name]: value
    });
};
    
      handleFormSubmit = event => {
        event.preventDefault();
    
        API.searchBook(this.state.searchTerm).then(res => {
          console.log(res);
          this.setState({ returnedBooks: res.data.items })
        })
      };
 */
render () {
    return (
    <Container>
        <div className="formCont">
            <h2> Post your Item </h2>
            <div className = "row">
                <div className="input-field col s6">
     
                    <input id="title" type="text" placeholder="Title" value={this.state.title} required />
                    <label for="title">Add a Title</label>
                </div>
                <div className="input-field col s6">
     
                    <input id="picture" type="text" required />
                    <label for="picture">Add a Picture</label>
                </div>
            </div>
            <div className = "row">
                <div className="input-field col s12">
     
                    <input id="Discription" type="text" required />
                    <label for="Discription">Description</label>
                </div>
            <div className = "row">
                <div className="input-field col s12">
     
                    <input id="Condition" type="text" required />
                    <label for="Condition">Condition</label>
                </div>
            </div>
            <div className = "row">
            <div className = "categorydrop">
            
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
    );  
}
}

