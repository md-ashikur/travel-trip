import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';

import './Home.css';

const Home = (cart) => {

    
    const {name, img, price} = cart;

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
            <h1 className='text-center mt-5'>Services</h1>
            <Services>{
                // carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }</Services>
            <section className="container">
                <p>Feel free to contact me any time</p>
                <h1 >Get in touch</h1>
                <div className="row my-5">
                    <div className="col-lg-4 col-md-4 col-12">
                        <h5>Call Us On</h5>
                        <p style={{ color: "#888D95FF;" }}>+123 456 7890</p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <h5>Visit Office</h5>
                        <p style={{ color: "#888D95FF;" }}>24 Street, Bogura, Bangladesh.</p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <h5>Email Us At</h5>
                        <p style={{ color: "#888D95FF;" }}>sample@uone.com</p>
                        
                    </div>
                </div>

            </section>


        </div>
    );
};

export default Home;