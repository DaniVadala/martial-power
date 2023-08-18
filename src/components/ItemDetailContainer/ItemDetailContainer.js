import { useState, useEffect, useContext } from "react";
import {getProductData} from "../../services/firebase";
import {Link, useParams} from "react-router-dom"; 
import Button from 'react-bootstrap/Button';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { cartContext } from "../../context/cartContext";


export default function ItemDetailContainer() {
    const [products, setProducts] = useState({});
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    
    const {id} = useParams()

    const { addToCart, getItemInCart } = useContext(cartContext);

  const itemInCart = getItemInCart(id);

  const maxItems = itemInCart
    ? products.stock - itemInCart.count
    : products.stock;

  console.log(maxItems);

    useEffect(()=>{
      async function requestProduct (){
        const respuesta = await getProductData(id);
        setProducts(respuesta);
    }
        requestProduct();
    }, []);

    function handleAddToCart(count){
      addToCart(products, count);
      alert(`Agregaste ${count} productos`)
          setIsAddedToCart(true);

    }
    const context = useContext(cartContext);
  return (
    <div className="itemCard">
      <Card className="card-box">
        <Card.Img className="card-image" variant="top" src={products.img} />
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>{products.description}</Card.Text>
          <Card.Text className="price">${products.price}</Card.Text>
          <div className="add-to-cart-container">
            {products.stock > 0 ? (
              isAddedToCart ? (
                <Link to="/cart">
                <div>
                  <span> Ir al carrito  </span>
                </div>
              </Link>
              ) : (
                <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
              )
            ) : (
              <p>No hay stock disponible</p>
            )}
            {itemInCart && (
              <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
            )}
            <Link to="/">
              <ButtonComponent>Volver al inicio</ButtonComponent>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

