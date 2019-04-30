import React from 'react'

const buttonStyle= {
    padding: "0px 2px 2px 2px"
}

const cardStyle = {
        height: "200px",
        width:"auto"
}


function Card(props) {
    return(
    <div className="col s4">
        <div className="card z-depth-4">
            <div className="card-image" >
                <img className="responsive-img" style={cardStyle} src={props.image} alt={props.title} />
                <span className="card-title">{props.title}</span>
            </div>
            <div className="card-content">
                <p className="truncate">{props.description}</p>
                <a className="card-action btn text-center green" style={buttonStyle} href="#">More Details</a>
            </div>
        </div>
    </div>
    )
}

export default Card;