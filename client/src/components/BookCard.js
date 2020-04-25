//this will contain reusable code styling for both SAVED and Book Results 
import React from "react";
import ViewInfo from "./ViewInfo.js";



function BookCard (props) {
    return(
        <div>
            <ul className="data">
                <li>
                Title: {props.title}
                <br></br>
                Author: {props.authors} 
                <br></br>
                Img: {props.image}
                <br></br>
                Description: {props.description}
                <br></br>
                <ViewInfo 
                    link={props.link}
                 />
                
                <button onClick={() => props.onClick(props)} >Save</button>

                 </li>
            </ul>
        </div>
    )    
    
}















//  function BookCard ({ 
//     title,
//     authors,
//     image,
//     description,
//     link,
//     onClick,
// }) {
//     return(
//         <div>
//             <ul className="data">
//                 <li>
//                 Title: {title}
//                 <br></br>
//                 Author: {authors} 
//                 <br></br>
//                 Img: {image}
//                 <br></br>
//                 Description: {description}
//                 <br></br>
//                 <ViewInfo 
//                     link={link}
//                  />
                
//                 <button onClick={onClick} >Save</button>

//                  </li>
//             </ul>
//         </div>
//     )    
    
// }

export default BookCard;