import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({greeting, title, description, img, price, id}) => {

  return (
    <div className="itemCard">
      <div className='greeting'>{greeting}</div>
      <Card className="card-box">
        <Card.Img className="card-image" variant="top" src={img} />
          <Card.Body >
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="item-price">{price}</Card.Text>
            <div className='add-to-cart-container'>
            <Link to ={`/product/${id}`}>
                <Button variant="primary">View Item</Button>
            </Link>
            </div>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Item
