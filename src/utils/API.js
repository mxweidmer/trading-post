import axios from "axios";

export default {
    user: function() {
        return axios.get("https://fierce-reaches-70530.herokuapp.com/api/auth/user",{ crossdomain: true, withCredentials:true })
    },   

    signup: function(signupData) {
        return axios.post("https://fierce-reaches-70530.herokuapp.com/api/auth/signup",signupData)
    },

    signin: function(signinData) {
        return axios.post("https://fierce-reaches-70530.herokuapp.com/api/auth/login",signinData)
    },   

    //get most recently added items on the landing page

    // http://fathomless-sands-76947.herokuapp.com/
    getRecentItems: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/items/dateDown")
    },       
    //post request for the create a new item
    createNewItem: function () {
        return axios.post("https://trading-post-server.herokuapp.com/api/items/:userid")
        /* example
        {	
        "_owner": "5cc8da15ce98f8f39fccd613",
	    "title": "Book",
	    "picture": "test",
	    "description": "C++ textbook",
	    "condition": "so-so",
	    "category": "Books"
        }
        */
    },
    //getUserInfo: function (userid) {
    //get request to receive a user's ifo with his/her items and the wishlist
    users: function() {
        return axios.get("https://trading-post-server.herokuapp.com/api/auth/users")
    },    

    getUserInfo: function (userid) {
        return axios.get("https://trading-post-server.herokuapp.com/api/users/" + userid)
    },
    //get request to receive items based on the category and the search term
    getSearchedItems: function (category, searchTerm) {
        /*  category = "Electronics";
         searchTerm = "Apple"; */
        console.log("category: " + category);
        console.log("searchTerm: " + searchTerm);
        return axios.get("https://trading-post-server.herokuapp.com/api/categories/" + category + "/" + searchTerm)
    },
    //create a new user (post method for signing up)
    /*
    signup: function(signupData) {
        return axios.post("https://trading-post-server.herokuapp.com/api/auth/users",signupData)
    },
    */
    /*
    updateItem: function() {
        return axios.put("Localhost:3000/api/items/:itemId")
    },
    deleteItem: function() {
        return axios.delete("Localhost:3000/api/items/:itemId")
    } */

}