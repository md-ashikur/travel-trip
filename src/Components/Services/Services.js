import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Services = () => {
    return (
        <div className='mt-5 pt-5'>
            <h3>services</h3>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                
            </CardGroup>
        </div>
    );
};

export default Services;