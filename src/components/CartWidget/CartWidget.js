import React from "react";
import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const context = useContext(cartContext);
  return (
    <Link to="/cart">
      <div className="shoppingCartBox">
        <FontAwesomeIcon className="cartIcon" icon={faCartShopping} />
        <span className="cartNumber">{context.getTotalItemsInCart()}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
