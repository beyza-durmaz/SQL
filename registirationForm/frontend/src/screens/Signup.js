import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../validation/signupValidation';
import axios from 'axios';

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
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
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios.post("http://localhost:8801/signup", values)
        .then(res => {
          navigate("/");
        }).catch(err => console.log(err))
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className='shadow p-3 mb-5 bg-white rounded w-25'>
        <h2 className='mb-3 text-center'>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input onChange={handleChange} name='name' type="text" placeholder='Enter your name' className='form-control rounded-0' />
            <span>{errors.name && <span className='text-danger'>{errors.name}</span>}</span>
          </div>
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
            <button type='submit' className='btn btn-success'><strong>Signup</strong></button>
            <Link to={"/"} className='btn btn-transparent'>Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;