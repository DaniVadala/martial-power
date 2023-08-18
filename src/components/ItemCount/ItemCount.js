import React from 'react'
import {useState} from "react";
import "./ItemCount.css";


 const ItemCount = (props) => {
    const [clickCount, setClickCount] = useState(1);
    
    function handleClickAdd(){
      if(clickCount === props.stock) {
      } else {
        setClickCount(clickCount + 1);
      }
    } 
    function handleClickSub(){
        if (clickCount > 1) {
          setClickCount(clickCount -1)
        }
    } 
  return (
    <div>

        <div className="ItemCount-container">
            <button disabled={props.stock === 0} className="ItemCount-button substract-button" onClick={handleClickSub}>-</button>
            <div className="selected-number">{clickCount}</div>
            <button disabled={props.stock === 0} className="ItemCount-button add-button" onClick={handleClickAdd}>+ </button>
        </div>

        <div>
            <button disabled={props.stock === 0} className='btn' onClick={() => props.onConfirm(clickCount)}>Add to cart</button>
        </div>
    </div>
  );
}

export default ItemCount; 