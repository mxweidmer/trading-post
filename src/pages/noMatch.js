//import React from "react";
import React, { Component } from "react";

const imgStyle={
  width: "50%",
  height: "auto",
  display: "block",
  margin: "auto"
}

const divStyle={
  width: "100%",
  height:"680px",
  backgroundColor: "Black",
}

function noMatch() {
  return (
    <div style={divStyle}>
            <h1 className="center white-text">404 Page Not Found</h1>
            
              <img style={imgStyle} src="https://media1.tenor.com/images/84c4e8c1a24b84bece745d2dcd2a5aa8/tenor.gif?itemid=5551618" />
            
    </div> 
  ); 
}

export default noMatch;
