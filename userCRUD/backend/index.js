const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "users",
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM user_table";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
});

app.get("/users", (req, res) => {
    const q = "SELECT * FROM user_table"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/create", (req, res) => {
    const q = "INSERT INTO user_table (`name`,`email`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    const q = "DELETE FROM user_table WHERE id = ?"

    db.query(q, [userId], (err, data) => {
        if (err) return res.json(err)
        return res.json("User has been deleted successfully!")
    })
});

app.put(("/update/:id"), (req, res) => {
    const userId = req.params.id;
    const q = "UPDATE user_table SET `name` = ?, `email` = ? WHERE id = ?"

    const values = [
        req.body.name,
        req.body.email,
    ]

    db.query(q, [...values, userId], (err, data) => {
        if (err) return res.json(err)
        return res.json("User has been updated successfully!")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!");
})