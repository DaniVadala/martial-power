import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
// import { createOrder } from "../../services/firebase";
import { Link, useNavigate } from "react-router-dom";


function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);
  const context = useContext(cartContext);

  if (cart.length === 0) {
    return <div>No hay productos en el carrito</div>;
  }

  return (
    <div >
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          {console.log(item.id)}
          <img style={{width:300}} src={item.img} alt="" />
          <div style={{backgroundColor: "lightblue", padding: 50}}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Number of items: {item.count}</p>
            <p>Total ${item.count * item.price}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
         
        </div>
      ))}
      <br />
      <div>${context.getTotalPriceInCart()}</div>
      <Link to="/checkout">Comprar</Link>
    </div>
  );
}

export default CartContainer;