//import React from 'react'
import React, { Component } from "react";
import { ProfileTop, List } from '../components/ProfileCard';
import { Row } from '../components/Grid';
import API from "../utils/API";



class Profile extends Component {



    state = {
        _id: "",
        isLoaded: false,
        error: null,
        firstName: "",
        lastName: "",
        userName: "",
        city: "",
        state: "",
        phone: "",
        bio: "",
        profilePic: "",
        items: [],
        wishlist: [],
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
                    this.setState({
                        isLoaded: true,
                        error: null,
                        _id: res.data._id,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        userName: res.data.userName,
                        city: res.data.city,
                        state: res.data.state,
                        phone: res.data.phone,
                        items: res.data.items,
                        wishlist: res.data.wishlist,
                        searchterm: res.data.searchTerm,
                        bio: res.data.bio,
                        profilePic: res.data.profilePic
                    })

                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            )
        //.catch(err => console.log(err));
    };

    deleteUserItem = (userId, itemId) => {
        API.deleteItem(userId, itemId).then(res => console.log(res))
    }

    render() {
        console.log(this.state)
        return (
            <div>

                <br />

                <ProfileTop
                    image={this.state.profilePic}
                    username={this.state.userName}
                    description={this.state.bio} />

                <Row>
                    <div className="col s6">
                    </div>
                    <div className="col s6">
                        <button className="waves-effect waves-light btn-small" style={{ fontSize: 10 }} onClick={this.routeChangeAddItem}>Add Item</button>
                        {/*  {this.renderRedirect()}
                        <button className="waves-effect waves-light btn-small" style={{ fontSize: 10 }} onClick={this.setRedirect}>Add Item</button>  */}
                    </div>
                </Row>

                <Row>
                    <List
                        listTitle="Posts"
                        userId={this.state._id}
                        deleteUserItem={this.deleteUserItem}
                        items={
                            this.state.items
                        }

                    />
                    <List
                        listTitle="Wishlist"
                        userId={this.state._id}
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