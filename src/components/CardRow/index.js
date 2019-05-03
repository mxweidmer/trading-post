import React from 'react'
import Card from "../Cards/index"



function CardRow(props) {
    console.log("PROPS: ", props)
    return (
        <div>

            <div className="row">
                {props.items.map((item, index) => (

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