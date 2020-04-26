import React from "react";

function ViewInfo (props) {
    return (
        <div>
            <br></br>
            <span className="link-container">
               <a href={props.link} target="_blank"  rel="noopener noreferrer">View more on Google Play</a>
            </span>
            <br></br>
        </div>
    )
}

export default ViewInfo;