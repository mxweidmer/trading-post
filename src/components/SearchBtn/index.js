import React from "react"

export function SearchBtn(props) {
    return (
      <button {...props} style={{ margin:"auto" ,  }} className="btn " type="submit">
       Search {props.children}
      </button>
    );
  }