import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
        <div className='bg-img'>
        <img src="https://images.unsplash.com/photo-1585296910838-ff8e46ea7979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
        </div>
        <div className='form-container'>
        <Form>
            <h2 className='text-center pb-3'>Sign Up</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="confirm-password" placeholder="confirm Password" required/>
            </Form.Group>
            
            <div className='text-center'>
            <button className='form-btn' type="submit">
                Sign Up
            </button>
            <p className='mt-3'>Already have an account? <Link to="/login" className='nav-links'>Login</Link></p>
            </div>
        </Form>
    </div>
    </div>
    );
};

export default SignUp;