import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    if (error || error1) {
       
        errorElement = <div>
           <p>Error: {error.message}</p>
         </div>
      
     }
     if (loading || loading1 ) {
       <p>Loading...</p>;
     }
     
     if (user || user1) {
       navigate('/');
     }

     const handleSignUp = event =>{
        event.preventDefault();
     }

    return (
        <div>
            <div className='bg-img'>
                <img src="https://images.unsplash.com/photo-1585296910838-ff8e46ea7979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>
            <div className='form-container'>
                <Form onSubmit={handleSignUp}>
                    <h2 className='text-center pb-3'>Sign Up</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  
                        onBlur={(e) => setEmail(e.target.value)} 
                        type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        onBlur={(e) => setConfirm(e.target.value)} type="confirm-password" placeholder="confirm Password" required />
                    </Form.Group>
                    <p style={{color:'red'}}>{errorElement}</p>
                    <p>{loading}</p>

                    <div className='text-center'>
                        <button 
                        onClick={() => createUserWithEmailAndPassword(email, password, confirm)}
                         className='form-btn' type="submit">
                            Sign Up
                        </button>
                        <p className='mt-3'>Already have an account? <Link to="/login" className='nav-links'>Login</Link></p>
                        <hr></hr>
                            <button onClick={() => signInWithGoogle()}
                                className='form-btn' type="submit">
                                Google
                            </button>
                    </div>
                   
                </Form>
            </div>
        </div>
    );
};

export default SignUp;