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
            <div>
                <p>Title: {title}</p> 
                <p>Author: {authors}</p> 
                <p>Img: {image}</p> 
                <p>description: {description}</p> 
                <p>Link: {link}</p> 
            </div>
        </div>
    )    
    
}

export default BookCard;