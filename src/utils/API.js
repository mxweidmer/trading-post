import axios from "axios";

export default {
    //get most recently added items on the landing page
    getRecentItems: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/items/dateDown")
    },
    //post request for the create a new item
    createNewItem: function (postData) {
        //return axios.post("https://trading-post-server.herokuapp.com/api/items/:userid", postData)
        console.log(postData);
        return axios.post("https://trading-post-server.herokuapp.com/api/items/5cca717879f2d60017aed66e", postData)
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
    //get request to receive a user's ifo with his/her items and the wishlist
    getUserInfo: function (userid) {
        return axios.get("https://trading-post-server.herokuapp.com/api/users/" + userid)
        //return axios.get("https://trading-post-server.herokuapp.com/api/users/cca717879f2d60017aed66e");
    },
    //get request to receive items based on the category and the search term
    getSearchedItems: function (category, searchTerm) {
        console.log("category: " + category);
        console.log("searchTerm: " + searchTerm);
        return axios.get("https://trading-post-server.herokuapp.com/api/categories/" + category + "/" + searchTerm)
    },
    //create a new user (post method for signing up)
    addNewUser: function () {
        return axios.post("https://trading-post-server.herokuapp.com/api/users")
    },
    //get request for update an item form
    updateItem: function (itemid) {
        //return axios.post("https://trading-post-server.herokuapp.com/api/items/single/:itemid")
        //console.log(postData);
        //return axios.get("https://trading-post-server.herokuapp.com/api/items/single/5cca086a4c0a7d0017d2382e")
        return axios.get("https://trading-post-server.herokuapp.com/api/items/single/" + itemid);
        /* example
        {
        title: "A ring",
        picture: "test",
        description: "old golden ring with ruby",
        condition: "good",
        category: "Jewelry",
        _id: "5cca086a4c0a7d0017d2382e",
        _owner: "5cca0613076d830017d9f38d",
        createdAt: "2019-05-01T20:58:18.447Z",
        updatedAt: "2019-05-01T20:58:18.447Z",
        __v: 0
        }
        */
    },
    //put request for updating an existing item
    updateExistingItem: function (itemid, postData) {
        //return axios.put("https://trading-post-server.herokuapp.com/api/items/single/:itemId", postData)
        console.log(postData);
        return axios.put("https://trading-post-server.herokuapp.com/api/items/single/" + itemid, postData)
        //on the backend we have to make sure we update only four fields for a given itemid!
        /* example
        {	
        title: "A ring",
        picture: "test",
        description: "old golden ring with ruby",
        condition: "good",
        category: "Jewelry",
        _id: "5cca086a4c0a7d0017d2382e",
        }
        */
    },


    /*
    updateItem: function() {
        return axios.put("Localhost:3000/api/items/:itemId")
    },
    deleteItem: function() {
        return axios.delete("Localhost:3000/api/items/:itemId")
    } */

}