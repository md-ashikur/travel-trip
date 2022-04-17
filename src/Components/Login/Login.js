import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {


    return (

        <div className='bg-img'>
            <div className='form-container'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <div className='text-center'>
                <Button  variant="primary" type="submit">
                    Login
                </Button>
                </div>
            </Form>
        </div>
        </div>
    );
};

export default Login;