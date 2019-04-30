import React from 'react'


function Card(props) {
    return(
    <div className="col s4">
        <div className="card z-depth-4">
            <div className="card-image">
                <img className="justify-card" src={props.image} alt={props.title} />
                <span className="card-title">{props.title}</span>
            </div>
            <div className="card-content">
                <p>{props.description}</p>
            </div>
            <div className="card-action btn green accent-2">
                <a href="#">More Details</a>
            </div>
        </div>
    </div>
    )
}

export default Card;