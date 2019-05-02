import React from 'react'
import Card from "../Cards/index"

const items = [{
    category: "Electronics",
    condition: "so-so",
    createdAt: "2019-05-02T18:59:24.733Z",
    description: "something",
    picture: "something",
    title: "Apple iPod",
    updatedAt: "2019-05-02T18:59:24.733Z",
    __v: 0,
    _id: "5ccb3e0c85dc010017dfb416",
    _owner: "5ccb2dd8be1c8f0017b74632"
}, {
    category: "Electronics",
    condition: "so-so",
    createdAt: "2019-05-02T18:58:51.356Z",
    description: "something",
    picture: "something",
    title: "Apple iPhone",
    updatedAt: "2019-05-02T18:58:51.356Z",
    __v: 0,
    _id: "5ccb3deb85dc010017dfb415",
    _owner: "5ccb2dd8be1c8f0017b74632"
},
{
    category: "Electronics",
    condition: "so-so",
    createdAt: "2019-05-02T18:11:15.665Z",
    description: "something",
    picture: "something",
    title: "AmazonBasics 9 Volt",
    updatedAt: "2019-05-02T18:11:15.665Z",
    __v: 0,
    _id: "5ccb32c3be1c8f0017b7463a",
    _owner: "5ccb2dd8be1c8f0017b74632"
}]

function CardRow() {
    console.log("PROPS: ", items)
    return (
        <div>

            <div className="row">
                {items.map((item, index) => (

                    <Card
                        title={item.title}
                        description={item.description}
                        image={item.picture}
                        id={item._id}
                        key={item._id}
                    />
                ))}
            </div>

        </div>
    )
}

export default CardRow;