 import React from "react";

 function SaveBtn ({...props}) {
     return(
    <button onClick={()=>props.click({...props})} >Save</button>
     )
}

export default SaveBtn;