import React, { useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import '../styles/Form.css';
import AdminLoginPage from './AdminLoginPage';

const RegisterForm = () => {
  const navigate = useNavigate();
  const navigateToAdminLogin = (e) => navigate("/admin/login");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerSubmit = async (e) => {
    e.preventDefault();
    const data = { userName, email, password, confirmPassword };
    const errors = validate({...data});
    console.log('errors:', {errors});
    if(Object.keys(errors).length === 0) {
        console.log('Registering with data: ', { data });
        try {
            const res = await axios.post('http://localhost:8080/registeruser', data);
            console.log('Posting data', res);
            setIsSubmitted(true);
            setTimeout(() => {
              navigate("/user/login");
            }, 2000);
        } catch(e) {
          console.error(e)
        }
    
    } else {
        setErrors(errors);
    }
  }

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   console.log('component did mount');
  //   axios.get('http://localhost:8080/getallusers')
  //     .then(res => {
  //       console.log("Getting from...", res.data)
  //       setData(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-1.png' alt='student-login' />
        </div>
        {!isSubmitted ? (
          <div className='form-content-right'>
          <form className='form' noValidate>
            <h1>
              Create your account by filling out the
              information below.
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
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
            <button className='form-input-btn' onClick={registerSubmit}>
              Sign up
            </button>
            <button onClick={navigateToAdminLogin} className='form-input-btn' >
              Admin Login
            </button>
            <span className='form-input-login'>
              Already have an account? Login <Link to='/user/login'>here</Link>
            </span>
          </form>
        </div>
        ) : (
          <div className='form-content-right'>
          <h1 className='form-success'>Registered Successfully!</h1>
        </div>
        )}
      </div>
      <Routes>
        <Route path='/login'  element={<AdminLoginPage />} />
    </Routes>
    </>
  );
};

function validate({userName, email, password, confirmPassword}) {
  let errors = {};
  if (!userName?.trim()) {
    errors.userName = 'Username required';
  }
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

  if (!confirmPassword) {
    errors.confirmPassword = 'Password is required';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
}


export default RegisterForm;