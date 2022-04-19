import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
    const navigate = useNavigate();
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


    if (user || user1) {
        navigate(from, { replace: true });
    }


    const handleSubmit = event => {
        event.preventDefault();
        
    }
    return (

        <div>
            <div className='bg-img'>
                <img src="https://images.unsplash.com/photo-1585296910838-ff8e46ea7979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>
            <div>
                <div className='form-container'>
                    <h2 className='text-center'>Login</h2>
                   <form onSubmit={handleSubmit}>
                    <div className='form-design'>
                   
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input className='input-design' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input className='input-design' onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="" required />
                    </div>
                    
                    <p style={{color: 'red'}}>{error?.message}</p>
                    
                    
                    <div className='text-center'>
                    <input className=' form-btn' type="submit" value="Login" onClick={() => signInWithEmailAndPassword(email, password)}  required/>
                    </div>


                    <div className='text-center'>

                        <p className='mt-3'>Already have an account? <Link to="/signup" className='nav-links'>Sign Up</Link></p>
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

        </div>

    );
};

export default Login;