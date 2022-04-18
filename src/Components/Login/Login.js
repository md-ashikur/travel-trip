import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // google--------------
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // email password-----------
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();
    let errorElement;


    if (error || error1) {

        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>

    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }
    

    const handleSubmit = event =>{
        event.preventDefault();
     }
    return (

        <div>
            <div className='bg-img'>
                <img src="https://images.unsplash.com/photo-1585296910838-ff8e46ea7979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>
            <div>
                <div className='form-container'>
                    <Form onSubmit={handleSubmit}>
                        <h2 className='text-center pb-3'>Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onBlur={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onBlur={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </Form.Group>
                        <p style={{ color: 'red' }}>{errorElement}</p>
                        <p>{loading}</p>
                        <div className='text-center'>
                            <button
                                onClick={() => signInWithEmailAndPassword(email, password)}
                                className='form-btn' type="submit">
                                Login
                            </button>

                            <p className='mt-3'>Don't have any account? <Link to="/signup" className='nav-links'>Sign Up</Link></p>
                            <hr></hr>
                            <button onClick={() => signInWithGoogle()}
                                className='form-btn' type="submit">
                                Google
                            </button>
                        </div>

                    </Form>
                </div>
            </div>

        </div>

    );
};

export default Login;