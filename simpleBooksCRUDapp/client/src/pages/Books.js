import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/books");
                setBooks(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:3001/books/" + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Book Site</h1>
            <div className="books">
                {
                    books.map(book =>
                        <div className='book' key={book.id}>
                            {book.photo && <img src={book.photo} />}
                            <h2>{book.title}</h2>
                            <p>{book.desc}</p>
                            <p>{book.price}</p>
                            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
                            <button className="update">
                                <Link to={`/update/${book.id}`} className='updatetext'>Update</Link>
                            </button>
                        </div>
                    )
                }
            </div>
            <button className='add'>
                <Link to="/add" className='addtext'>Add New Book</Link>
            </button>
        </div>
    )
}

export default Books