import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    photo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/books", book)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>New Book</h1>
      <div className='form'>
        <input type="text" placeholder='title' name='title' onChange={handleChange} />
        <input type="text" placeholder='desc' name='desc' onChange={handleChange} />
        <input type="number" placeholder='price' name='price' onChange={handleChange} />
        <input type="text" placeholder='photo' name='photo' onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}

export default Add