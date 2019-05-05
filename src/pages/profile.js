
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
        const { id } = this.props.match.params
        console.log("id " + id);
        this.loadUser(id);
        /*  ((id) => {
             this.setState(_id = id)
           })     */
    }

    loadUser = (id) => {
        API.getUserInfo(id)
            .then(
                res => {
                    console.log(res.data)
                    this.setState({
                        _id: id,
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
                    username={this.state.firstName}
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