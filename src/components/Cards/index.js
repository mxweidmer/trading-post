import React from 'react'

const buttonStyle = {
    alignContent: "right",
    padding: "0px 2px 2px 2px",
    width: "90px",
    display: "inline-block",
    marginBottom: "10px"
}


const cardImageStyle = {
    height: "200px",
    width: "100%",
    display: "block",
    margin: "auto"
}

const titleDiv = {
    fontSize: "22px",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "50px",
    background: "#00838f",
    opacity: ".6",
    padding: "0, 5%, 30px, 5%"

}

const titleText = {
    padding: "10%",
    color: "white"
}

const content = {
    padding: "24px, 24px, 5px, 24px",
    margin: "20px"
}



function Card(props) {
    return (
        <div>
            <div className="col s4">
                <div className="card z-depth-4">
                    <div className="card-image" >
                        <a className="modal-trigger" href={`#${props.id}`}><img className="responsive-img" style={cardImageStyle} src={props.image} alt={props.title} /></a>
                        <div className="valign-wrapper" style={titleDiv}>
                            <p className="truncate" style={titleText} >{props.title}</p>
                        </div>
                    </div>
                    <div  style={content}>
                        <p className="truncate">{props.description}</p>
                        <div className="row">
                        <div className="col s2 offset-s7">
                        <a className="card-action btn text-center modal-trigger right-align cyan" style={buttonStyle} href={`/trading-post/item/${props.id}`}>Details</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;