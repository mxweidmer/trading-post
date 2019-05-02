//import React from 'react'
import React, { Component } from "react";
import { List } from '../components/ProfileCard';
import { Row } from '../components/Grid';
import API from "../utils/API";

class Profile extends Component {

    state = {
        _id: "5cca717879f2d60017aed66e",
        isLoaded: false,
        error: null,
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        phone: "",
        items: [],
        wishlist: [],
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
        return (
            <div>
                <br />
               {/*  <Profile
                    image="https://i.imgur.com/H37kxPH.jpg"
                    username="Doggo McPuppers"
                    description="Average doggo, normal doggo things in progress." /> */}

                <Row>
                    <List
                        listTitle="Posts"
                        items={
                            [{
                                id: "1",
                                name: "burrito",
                                link: "#"

                            },
                            {
                                id: "2",
                                name: "purrito",
                                link: "#"
                            }]
                        }

                    />
                    <List
                        listTitle="Wishlist"
                        items={
                            [{
                                id: "3",
                                name: "Bowl of Cereal",
                                link: "#"
                            },
                            {
                                id: "4",
                                name: "Overcooked, raw sushi",
                                link: "#"
                            }
                            ]}
                    />
                </Row>
            </div>
        )
    }

}

export default Profile;