import React, {Component} from 'react'
import ItemCard from '../components/ItemCard'




class ItemPage extends Component {
    state = {
        id: "",
        picture: "https://i.imgur.com/XgbZdeA.jpg",
        title: "This thing you want to buy!",
        description: "Omg this is the best thing, you have to have this thing...",
        condition: "Broken",
        ownerID: "Mr. Jenkins",
        ownerEmail: "SaveTheWhales@TheEarthIsFlat.edu"
    }

    



    render() {
        return (
        <ItemCard
        picture={this.state.picture}
        title={this.state.title}
        description={this.state.description}
        condition={this.state.condition}
        ownerEmail={this.state.ownerEmail} />
        )
    }

        
}


export default ItemPage