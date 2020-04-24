import React from "react";

function SaveBtn(props){
    return(
         <button onClick={() => props.savedMethod()}>Save</button>
    )
}

export default SaveBtn;