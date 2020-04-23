//this will handle the search functionality 
import React from "react";

function Form (){
    return (
    <div>
        <form className="form text-center">
            <input //title 
                // value={this.state.firstName}
                name="title"
                // onChange={this.handleInputChange}
                type="text"
                placeholder="Title"
            />
            <input //author 
                // value={this.state.lastName}
                name="Author"
                // onChange={this.handleInputChange}
                type="text"
                placeholder="Author"
            />

            <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;