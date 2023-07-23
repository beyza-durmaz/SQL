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
    database: "registirationform",
});

app.post("/login", (req, res) => {
    const q = "SELECT * FROM registiration WHERE `email` = ? AND `password` = ?";

    db.query(q, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success")
        } else {
            return res.json("failed");
        }
    });
});

app.post("/signup", (req, res) => {
    const q = "INSERT INTO registiration (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ];

    db.query(q, [values], (err, data) => {
        if (err){
            return res.json("err");
        }
        return res.json(data);
    });
});

app.listen("8801", () => {
    console.log("Connected to backend!");
})