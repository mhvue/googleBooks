import React from "react";
// import ViewInfo from "./ViewInfo.js";


function SaveBtn (props){
    return(
        <div>
           <button onClick={()=> props.onClick(props)}>Save</button>
        </div>
    )
}

export default SaveBtn;