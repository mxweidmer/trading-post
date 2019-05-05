//import React from 'react'
import React, { Component } from "react";
import { ProfileTop, List } from '../components/ProfileCard';
import { Row } from '../components/Grid';
import Nav from '../components/Nav'
import API from "../utils/API";



class Profile extends Component {



    state = {
<<<<<<< HEAD
        _id: "5cce6221898ff95900d1cbd8",
=======
        _id: "",
>>>>>>> 1e31cbf3348af9f43e0e2cc8ba99e82409ab6c9e
        isLoaded: false,
        error: null,
        firstName: "",
        lastName: "",
        userName: "",
        city: "",
        state: "",
        phone: "",
        items: [{ name: "toy boat", id: "1", link: "#" }],
        wishlist: [{ name: "boat toy", id: "2", link: "#" }],
        searchTerm: "",
        pg: "Profile",
        categories: ['General', 'Books', 'Electronics', 'Jewerly', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
    };


    componentDidMount() {
        const { id } = this.props.match.params
        console.log("id " + id);
        this.loadUser(id, (id) => { this.setState._id = id });
        
    }

    loadUser = (id) => {
        API.getUserInfo(id)
            .then(
                res => {
                    console.log(res.data)
<<<<<<< HEAD
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
                    
=======
                    this.setState({
                        isLoaded: true,
                        error: null,
                        firstName: res.data.firstName,
                        lastName: res.data.lasName,
                        city: res.data.city,
                        state: res.data.state,
                        phone: res.data.phone,
                        items: res.data.items,
                        wishlist: res.data.wishlist,
                        searchterm: res.data.searchTerm
                    })

>>>>>>> 1e31cbf3348af9f43e0e2cc8ba99e82409ab6c9e
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
<<<<<<< HEAD
                    username= {this.state.userName}
=======
                    username={this.state.firstName}
>>>>>>> 1e31cbf3348af9f43e0e2cc8ba99e82409ab6c9e
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