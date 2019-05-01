import  React from 'react'
import {Profile, List} from '../components/ProfileCard'

function Profile (){
    return(
        <div>
        <Profile 
        image="https://i.imgur.com/H37kxPH.jpg"
        username="Doggo McPuppers"
        description="Average doggo, normal doggo things in progress."/>


        <List 
        ListTitle="Posts"
        />

        </div>
    )
}