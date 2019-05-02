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
  backgroundImage: "url(http://blog.adw.org/wp-content/uploads/2019/01/stars-984050_960_720-2.jpg)",
  backgroundSize: "cover",
  paddingTop: "0px"
}

function noMatch() {
  return (
    <div style={divStyle}>
            <h1 className="center white-text">404 Page Not Found</h1>
            
              <img style={imgStyle} src="https://i.imgur.com/QT4rpl8.jpg" />
            
    </div> 
  ); 
}

export default noMatch;
