import React from 'react';
import { Spinner } from 'react-bootstrap';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='notfound'>
             <Spinner animation="border" variant="primary" /> <h2> 404 not found</h2>
        </div>
    );
};

export default NotFound;