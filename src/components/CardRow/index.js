import React from 'react'
import Card from "../Cards/index"

function CardRow (){
    return(
        <div className="row">
        <Card 
        title="GoT meme"
        description="lul, bran went to Avengers during the battle"
        image="https://i.imgur.com/ELJlQz1.jpg"/>
        <Card 
        title="GoT meme"
        description="lul, bran went to Avengers during the battle"
        image="https://i.imgur.com/ELJlQz1.jpg"/>
        <Card 
        title="GoT meme"
        description="lul, bran went to Avengers during the battle"
        image="https://i.imgur.com/ELJlQz1.jpg"/>
        </div>
    )
}

export default CardRow;