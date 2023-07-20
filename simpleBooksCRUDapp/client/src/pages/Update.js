import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    photo: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/books/"+ bookId, book)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Update Book</h1>
      <div className='form'>
        <input type="text" placeholder='title' name='title' onChange={handleChange} />
        <input type="text" placeholder='desc' name='desc' onChange={handleChange} />
        <input type="number" placeholder='price' name='price' onChange={handleChange} />
        <input type="text" placeholder='photo' name='photo' onChange={handleChange} />
        <button onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

export default Update;