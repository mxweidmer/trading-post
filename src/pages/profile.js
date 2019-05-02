import React from 'react'
import { Profile, List } from '../components/ProfileCard'
import {Row} from '../components/Grid'

function Profilepage() {
    return (
        <div>
            <br/>
            <Profile
                image="https://i.imgur.com/H37kxPH.jpg"
                username="Doggo McPuppers"
                description="Average doggo, normal doggo things in progress." />

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
                    name:"Overcooked, raw sushi",
                    link: "#"
                }
            ]}
            />
            </Row>


        </div>
    )
}

export default Profilepage;