import React from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const CartWidget = () => {
  return (
    <div className='shoppingCartBox'>
      <FontAwesomeIcon className="cartIcon" icon={faCartShopping} />
      <p className='cartNumber'>5</p> 
    </div>
  );
};

export default CartWidget