
import React from 'react';

const Cart = (props) => {
    const {name, img, description} = props.cart;
    return (
        <div className='review-cart '>
        <img src={img} alt=""/>
        <h4>{name}</h4>
        <p>{description}</p>
        
        
      
    </div>
    );
};

export default Cart;