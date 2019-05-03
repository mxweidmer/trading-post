import React from "react"

export function SearchBtn(props) {
    return (
      <button {...props} style={{ margin:"auto" ,  }} className="btn" type="submit">
      {/* <button {...props} style={{ margin:"auto" ,  }} className="btn col s12 m2" type="submit"> */}     
       Search {props.children}
      </button>
    );
  }