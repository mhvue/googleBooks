//this will contain reusable code styling for both SAVED and Book Results 
import React from "react";
// import SaveBtn from "./LayoutCard.js";
import ViewInfo from "./ViewInfo.js";

 export function BookCard ({ 
    title,
    authors,
    image,
    description,
    link,
    // onClick,
    button
}) {
    return(
        <div>
            <ul className="data">
                <li>
                Title: {title}
                 <br></br>
                Author: {authors} 
                 <br></br>
                 <img 
                 src={image}
                 alt={title}
                 />
                 <br></br>
                 Description: {description}
                 <br></br>
               
                <ViewInfo 
                    link={link}
                 />
            
                {/* <button onClick={()=> onClick({
                    title,
                    authors,
                    image,
                    description,
                    link,
                })}>Save</button> */}
                {button}

                 </li>
            </ul>
           
        </div>
         
    )    
 
}

