import React from 'react'

const imageStyle = {
    width: "50%",
    height: "600px",
    margin: "auto",
    display: "block"
}

const buttonStyle = {
    padding: "2px, 2px, 2px, 2px",
    margin: "2px, 2px, 10px, 2px"
}

function ItemCard(props) {

    return (

        <div className="container">
            <div className="col s10 z-depth-4">
                <div className="card ">
                    <h2 className="center">{props.title}</h2>
                    <div className="row">
                        <div className="card-image" >
                            <img className="responsive-img" style={imageStyle} src={props.picture} alt={props.title} />

                        </div>
                        <div className="card-content">

                            <h5>Description</h5>
                            <div className="col s8">
                                <p>{props.description}</p>
                            </div>
                            <div className="col s4">
                                <p>Condition: {props.condition}</p>
                                <a className="btn green modal-trigger" href="#modal1" style={buttonStyle}>Email this user!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modal1" className="modal" >
                <div className="container">
                    <form action={"mailto:" + props.ownerEmail} method="post" enctype="text/plain">
                        <br />
                        Hi, My name is <input type="text" name="name" placeholder="Name" /><br />
                        <br />
                        <input type="text" name="comment" size="50" placeholder="Your Message Here" /><br /><br />
                        <input type="submit" value="Send" />
                        <input type="reset" value="Reset" />
                    </form>


                </div>

            </div>
        </div>
    )
}

export default ItemCard;