import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'
const Services = () => {

    return (
        <div className='my-5 pt-5 text-center container'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title>One day trip</Card.Title>
                        <Card.Text>
                            Get the latest deals, reviews & articles. Tailored for the
                            destinations you choose.
                        </Card.Text>
                        <b>Price:$100</b>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/checkout"><button className='check-btn'>Proceed</button></Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1601121470606-bf5af91fd471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title>7 day trip</Card.Title>
                        <Card.Text>
                            Get the latest deals, reviews & articles. Tailored for the
                            destinations you choose.

                        </Card.Text>
                        <b>Price:$500</b>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/checkout" ><button className='check-btn'>Proceed</button></Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1604993497641-675b263bad43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmdsYWRlc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title>1 Month trip</Card.Title>
                        <Card.Text>
                            Get the latest deals, reviews & articles. Tailored for the
                            destinations you choose.

                        </Card.Text>
                        <b>Price:$1500</b>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/checkout"><button className='check-btn'>Proceed</button></Link>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Services;