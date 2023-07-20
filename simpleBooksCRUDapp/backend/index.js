import express from "express";
import mysql from "mysql";
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "books",
})

// if there is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM booktable"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO booktable (`title`,`desc`,`price`,`photo`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.photo,
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been created successfully!")
    })
});

app.delete(("/books/:id"), (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM booktable WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been deleted successfully!")
    })
})

app.put(("/books/:id"), (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE booktable SET `title` = ?, `desc` = ?, `price` = ?, `photo` = ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.photo,
    ]

    db.query(q, [...values,bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been updated successfully!")
    })
})

app.listen(3001, () => {
    console.log("Connected to backend!");
})