import React from 'react';
import './NavBar.css';


export default function Search (){
    return(
        <div>
            <input 
                type="text" 
                className="input" 
                placeholder="Search for your task" 
                id = "SearchBar"
            />
        </div>
    )
}
