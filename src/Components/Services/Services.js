import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect ( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
        <div className='mt-5 pt-5'>
            <h3>services</h3>
            
        </div>
    );
};

export default Services;