import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'
import API from "../utils/API"




class ItemPage extends Component {
    state = {
        id: "",
        picture: "",
        title: "",
        description: "",
        condition: "",
        ownerID: "",
        ownerEmail: ""
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.getItem(id)

    }

    getItem = (id) => {
        API.getItemData(id)
            .then(
                res => {
                    console.log(res.data)
                    this.setState({
                        id: res.data._id,
                        picture: res.data.picture,
                        title: res.data.title,
                        description: res.data.description,
                        condition: res.data.condition
                    })

                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            )
        //.catch(err => console.log(err));
    };



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