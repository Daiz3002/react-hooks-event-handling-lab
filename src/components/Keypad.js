// Code Keypad Component Here
import React from "react";

function Keypad(){
    return(
        <input type="password" onChange={handleChange}></input>
    );

    function handleChange() {
        console.log('Entering password...')
    }
};

export default Keypad;