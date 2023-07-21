import React from 'react'
import {useState} from "react";
import "./Counter.css";

 const Counter = () => {
    const [clicks, setClicks] = useState(0);
    
    function handleClick(){
        setClicks(clicks + 1);
    } 
    function handleClickResta(){
        if (clicks > 0) {
         setClicks(clicks -1)
        }
    } 
  return (
    <div className="counter-container">
        <button className='counter-button substract-button' onClick={handleClickResta}>-</button>  
       <div className='selected-number'>{clicks}</div>
       <button className='counter-button add-button' onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter; 