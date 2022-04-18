import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
const SignUp = () => {

    const [agree, setAgree] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    if (error || error1) {

        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>

    }
    if (loading || loading1) {
        <p>Loading...</p>;
    }

    if (user || user1) {
        navigate('/');
    }

    const handleSignUp = event => {
        event.preventDefault();
    }

    return (
        <div>
            <div className='bg-img'>
                <img src="https://images.unsplash.com/photo-1585296910838-ff8e46ea7979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>
            <div className='form-container text-center'>
                <Form onSubmit={handleSignUp}>
                    <h2 className='text-center pb-3'>Sign Up</h2>
                    <input onBlur={(e) => setName(e.target.value)} type="text" name="name" id="" className='input-design' placeholder='Your Name' /><br></br>

                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="" className='input-design' placeholder='Email Address' required /><br></br>

                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" className='input-design' id="" placeholder='Password' required /><br></br>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                    <input
                        disabled={!agree}
                        className='w-50 mx-auto btn btn-primary mt-2 form-btn'
                        type="submit"
                        onClick={() => createUserWithEmailAndPassword(email, password, name)}
                        value="Sign Up" />
                    <div className='text-center'>
                        
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