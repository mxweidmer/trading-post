import React from "react"

function PostFormBtn(props) {
    return (
      <button {...props} style={{ margin:"auto" ,  }} className="PostFormBtn" type="submit">
       Post Item {props.children}
      </button>
    );
  }

  export default PostFormBtn;