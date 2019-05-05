//import React from 'react'
import React, { Component } from "react";
import { ProfileTop, List } from '../components/ProfileCard';
import { Row } from '../components/Grid';
import Nav from '../components/Nav'
import API from "../utils/API";

class Profile extends Component {

    state = {
        _id: "5cce6221898ff95900d1cbd8",
        isLoaded: false,
        error: null,
        firstName: "",
        lastName: "",
        userName: "",
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
                    console.log(res.data)
                    this.setState({ 
                                    isLoaded: true,
                                    error: null,
                                    firstName: res.data.firstName,
                                    lastName: res.data.lastName,
                                    userName: res.data.userName,
                                    city: res.data.city,
                                    state: res.data.state,
                                    phone: res.data.phone,
                                    items: res.data.items,
                                    wishlist: res.data.wishlist,
                                    searchterm: res.data.searchTerm })
                    
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
                    username= {this.state.userName}
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
                            this.state.wishlist
                        }

                    />
                </Row>
            </div>
        )
    }

}

export default Profile;