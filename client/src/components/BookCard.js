//this will contain reusable code styling for both SAVED and Book Results 
import React from "react";
import ViewInfo from "./ViewInfo.js";
import "./componentStyle.css";

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
                <img className="booksImg"
                 src={image}
                 alt={title}
                 />
                <br></br>
                <h5>Title: {title}</h5>
                <h6>Author: {authors} </h6>
                {description}
                 <br></br>
                <ViewInfo 
                    link={link}
                 /> 
                  <br></br>
                  {button}
                )
                 </li>
            </ul>
           
        </div>
         
    )    
 
}

export default BookCard;