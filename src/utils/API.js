import axios from "axios";

export default {
    getUserItem: function() {
        return axios.get("Localhost:3000/api/users/:id")
    },
    createNewItem: function() {
        return axios.post("Localhost:3000/api/items/:userid")
    },
    updateItem: function() {
        return axios.put("Localhost:3000/api/items/:itemId")
    },
    deleteItem: function() {
        return axios.delete("Localhost:3000/api/items/:itemId")
    }

}