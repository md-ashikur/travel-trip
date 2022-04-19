import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
const SignUp = () => {

    const [agree, setAgree] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        ,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1] = useSignInWithGoogle(auth);
   
    if (loading || loading1) {
        <p>Loading...</p>;
    }

    if (user || user1) {
        navigate('/');
    }

    const handleSignUp = event => {
        event.preventDefault();
        if(password !== confirm){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
    }

    return (
        <div>
            <div className='bg-img'>
                <img src="https://images.unsplash.com/photo-1585296910838-ff8e46ea7979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>
            <div className='form-container text-center'>
            <h2 className='text-center'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className='form-design'>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input className='input-design' onBlur={(e) => setName(e.target.value)} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input className='input-design' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input className='input-design' onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input className='input-design' onBlur={(e) => setConfirm(e.target.value)} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                    <input
                        disabled={!agree}
                        className='mx-auto mt-2 form-btn'
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
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;