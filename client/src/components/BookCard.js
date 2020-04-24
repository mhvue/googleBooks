//this will contain reusable code styling for both SAVED and Book Results 
import React from "react";

function BookCard ({ 
    title,
    authors,
    image,
    description,
    link
}) {
    return(
        <div>
            <ul>
                <li>
                Title: {title}
                <br></br>
                Author: {authors} 
                <br></br>
                Img: {image}
                <br></br>
                description: {description}
                <br></br>
                Link: <a href={link} target= "_blank">Link</a>
                {/* {link} */}
                 </li>
            </ul>
        </div>
    )    
    
}

export default BookCard;