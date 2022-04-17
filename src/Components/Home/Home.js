import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="head-title">
                <h3>To travel is to Live</h3>
                <h1>WORLD TOUR</h1>
                <p>Get the latest deals, reviews & articles. Tailored for the<br></br> destinations you choose.</p>
                <button>EXPLORE</button>

            </div>


            <Carousel>
                <Carousel.Item className='banner' interval={1000}>
                    <img
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1503220954697-e02095e8e0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item className='banner' interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1562805791-dbca2a22bba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;