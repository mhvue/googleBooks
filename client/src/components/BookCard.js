//this will contain reusable code styling for both SAVED and Book Results 
import React from "react";
import ViewInfo from "./ViewInfo.js";

 function BookCard ({ 
    title,
    authors,
    image,
    description,
    link,
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
            
               {button}
                 </li>
            </ul>
           
        </div>
         
    )    
 
}

export default BookCard;