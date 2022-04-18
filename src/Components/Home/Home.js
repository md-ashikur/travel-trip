import React from 'react';
import { CardGroup, Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Cart from '../Cart/Cart';
import './Home.css'
import useCart from '../Hooks/useCart';
const Home = () => {

    const [cart, setCart] = useCart();
    const carts = cart.slice(0, 3);

    return (
        <div>
            <div className="head-title">
                <h3>To travel is to Live</h3>
                <h1>Tour Expert in Bangladesh</h1>
                <p>Get the latest deals, reviews & articles. Tailored for the<br></br> destinations you choose.</p>
                <button>EXPLORE</button>

            </div>


            <Carousel>
                <Carousel.Item className='banner' interval={1000}>
                    <img
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item className='banner' interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1622760219088-90c1576336a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
            <Services>{
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }</Services>
           
            
        </div>
    );
};

export default Home;