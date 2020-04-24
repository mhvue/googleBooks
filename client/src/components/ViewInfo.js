import React from "react";

function ViewInfo (props) {
    return (
        <div>
            <span className="view-btn" role="button"  tabIndex="0">
               <a href={props.link} target="_blank"  rel="noopener noreferrer">View more on Google Play</a>
            </span>
        </div>
    )
}

export default ViewInfo;