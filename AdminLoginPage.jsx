import React, { useState, useEffect } from 'react';
import '../styles/Form.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const navigateToAdminLogin = (e) => navigate("/");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const errors = validate({...data});
    console.log('admin login errors:', errors);
    if(Object.keys(errors).length === 0) {
        console.log('Logining with data: ', { data });
        try {
            const res = await axios.post('http://localhost:8080/adminlogin', data);
            console.log('Posting data', res);
            setIsSubmitted(true);
            setTimeout(() => {
              navigate("/admin");

            }, 2000);
        } catch(e) {
          console.error(e)
          alert("Invalid Credentials")
        }
    } else {
        setErrors(errors);
    }
  }

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='/img/img-1.png' alt='student-login' />
        </div>
        {!isSubmitted ? (
          <div className='form-content-right'>
          <form className='form' noValidate>
            <h1>
             Admin Login 
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className='form-input-btn' onClick={loginSubmit}>
              Sign in
            </button>
            <button onClick={navigateToAdminLogin} className='form-input-btn' >
              User Login
            </button>
          </form>
        </div>
        ) : (
          <div className='form-content-right'>
          <h1 className='form-success'>Admin Login Success!</h1>
        </div>
        )}
      </div>
    </>
  );
};

function validate({userName, email, password, confirmPassword}) {
  let errors = {};
  if (!email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email address is invalid';
  }
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  return errors;
}

export default AdminLoginPage;