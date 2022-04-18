
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Cart = (props) => {
    const {name, img, description} = props.cart;
    return (
        <CardGroup>
                
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
        </CardGroup>
        
        
      
  
    );
};

export default Cart;