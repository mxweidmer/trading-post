//import React from 'react'
import React, { Component } from "react";
import { ProfileTop, List } from '../components/ProfileCard';
import { Row } from '../components/Grid';
import API from "../utils/API";

class Profile extends Component {

    state = {
        _id: "5cca717879f2d60017aed66e",
        isLoaded: false,
        error: null,
        firstName: "Spongebob",
        lastName: "",
        city: "",
        state: "",
        phone: "",
        items: [{name:"toy boat", id: "1", link: "#"}],
        wishlist: [{name:"boat toy", id:"2", link: "#"}],
        searchTerm: "",
        pg: "Profile",
        categories: ['General', 'Books', 'Electronics', 'Jewerly', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
    };

    componentDidMount() {
        this.loadUser(this.state._id);
    }

    loadUser = (id) => {
        API.getUserInfo(id)
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

    render() {
        console.log(this.state)
        return (
            <div>
                <br />
                
                <ProfileTop
                    image="https://i.imgur.com/H37kxPH.jpg"
                    username= {this.state.firstName}
                    description="Average doggo, normal doggo things in progress." />

                <Row>
                    <List
                        listTitle="Posts"
                        items={
                            this.state.items
                        }

                    />
                    <List
                        listTitle="Wishlist"
                        items={
                            [
                                this.state.wishlist
                            ]}
                    />
                </Row>
            </div>
        )
    }

}

export default Profile;