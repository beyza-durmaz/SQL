import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.put("http://localhost:8800/update/" + id, { name, email })
            .then(res => {
                console.log(res)
                navigate("/")
            }).catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' value={name} className='form-control'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' value={email} className='form-control'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Create;