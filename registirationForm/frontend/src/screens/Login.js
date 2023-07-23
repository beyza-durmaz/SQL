import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../validation/loginValidation';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios.post("http://localhost:8801/login", values)
        .then(res => {
          if(res.data === "Success"){
            navigate("/home")
          } else {
            alert("Invalid email or password.");
          }
        }).catch(err => console.log(err))
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className=' shadow p-3 mb-5 bg-white rounded w-25'>
        <h2 className='mb-3 text-center'>Log-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input onChange={handleChange} name='email' type="email" placeholder='Enter your email' className='form-control rounded-0' />
            <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input onChange={handleChange} name='password' type="password" placeholder='Enter your password' className='form-control rounded-0' />
            <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
          </div>
          <div className='d-grid gap-2'>
            <button className='btn btn-success'><strong>Login</strong></button>
            <Link to={"/signup"} className='btn btn-transparent'>Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;