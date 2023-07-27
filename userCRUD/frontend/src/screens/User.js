import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8800/")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/users/" + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <Link to={"/create"} className="btn btn-success mb-3">Add</Link>
                {users.length > 0 ? (
                    <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className='btn btn-primary'>
                                            <Link to={`/update/${user.id}`} className='text-white text-decoration-none'>Update</Link>
                                        </button>
                                        <button className='btn btn-danger ms-2'
                                            onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default User;