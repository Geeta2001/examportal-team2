import React, { useState, useEffect } from 'react';
import '../styles/Form.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserLoginPage = () => {
  const navigate = useNavigate();
  const navigateToUserRegister = (e) => navigate("/");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = async (e) => {
    e.preventDefault();
    const data = { userName, password };
    const errors = validate({...data});
    console.log('user login errors:', errors);
    if(Object.keys(errors).length === 0) {
        console.log('Logining with data: ', { data });
        try {
            const res = await axios.post('http://localhost:8080/userlogin', data);
            console.log('Posting data', res);
            setIsSubmitted(true);
            setTimeout(() => {
              navigate("/user");

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
             User Login 
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Username</label>
              <input
                className='form-input'
                type='text'
                name='username'
                placeholder='Enter your username'
                value={userName}
                onChange={e => setUsername(e.target.value)}
              />
              {errors.userName && <p>{errors.userName}</p>}
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
            <button onClick={navigateToUserRegister} className='form-input-btn' >
              Register
            </button>
          </form>
        </div>
        ) : (
          <div className='form-content-right'>
          <h1 className='form-success'>User Login Success!</h1>
        </div>
        )}
      </div>
    </>
  );
};

function validate({userName, password}) {
  let errors = {};
  if (!userName?.trim()) {
    errors.userName = 'Username required';
  }
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  return errors;
}

export default UserLoginPage;