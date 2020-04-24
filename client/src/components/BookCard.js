//this will contain reusable code styling for both SAVED and Book Results 
import React from "react";

function BookCard ({ 
    title,
    author,
    image,
    description,
    link
}) {
    return(
        <div>
            <div>
                <p>{title}</p> 
                <p>{author}</p> 
                <p>{image}</p> 
                <p>{description}</p> 
                <p>{link}</p> 
            </div>
        </div>
    )    
    
}

export default BookCard;