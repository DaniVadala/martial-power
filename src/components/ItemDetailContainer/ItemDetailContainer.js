import {useState, useEffect} from "react";
import {getProductData} from "../Services/AsyncMock";
import {useParams} from "react-router-dom"; 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';


export default function ItemDetailContainer() {
    const [products, setProducts] = useState({});

    const {id} = useParams()

    async function requestProduct (){
        const respuesta = await getProductData(id);
        setProducts(respuesta);
    }
    useEffect(()=>{
        requestProduct();
    }, []);

  return (
    <div className="itemCard">
      <Card className="card-box">
          <Card.Img className="card-image" variant="top" src={products.img} />
          <Card.Body >
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>{products.description}</Card.Text>
            <Card.Text className='price'>{products.price}</Card.Text>
            <div className='add-to-cart-container'>
            <Counter/>
            <Button variant="primary">Add to Cart</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
  )
}

