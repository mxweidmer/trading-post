import React from 'react'

const buttonStyle = {
    padding: "0px 2px 2px 2px"
}

const cardStyle = {
    height: "200px",
    width: "auto"
}

const modalStyle = {
    height: "auto",
    width: "500px"
}

const modalImageStyle = {
    height: "350px",
    width: "50%",
    display: "block",
    margin: "auto"
}

const cardImageStyle = {
    height: "200px",
    width: "90%",
    display: "block",
    margin: "auto"
}

function Card(props) {
    return (
        <div>
            <div className="col s4">
                <div  className="card z-depth-4">
                    <div className="card-image" >
                        <a className="modal-trigger" href={"#" + props.description}><img className="responsive-img" style={cardImageStyle} src={props.image} alt={props.title} /></a>
                        <span className="card-title center-align">{props.title}</span>
                    </div>
                    <div className="card-content">
                        <p className="truncate">{props.description}</p>
                        <a className="card-action btn text-center green modal-trigger" style={buttonStyle} href={"#" + props.description}>More Details</a>
                    </div>
                </div>
            </div>
            <div style={modalStyle} id={props.description} className="modal animated flipInY">
                <div className="modal-content">
                    <h4 className="center-align">{props.title}</h4>
                    <img className="responsive-img centerpalign" style={modalImageStyle} src={props.image} alt={props.title} />
                    <p>{props.description}</p>
                </div>
                <div className="modal-footer">
                    <a href="#" className="modal-close waves-effect green waves-red btn-flat">Add to wishlist</a>
                    <a href="#!" className="modal-close waves-effect red waves-red btn-flat">Close</a>
                </div>
            </div>
        </div>
    )
}

export default Card;