const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "healthtrack_db"
});
db.connect((err) => {
    if (err) {
        console.log("Error connecting to DB");
    } else {
        console.log("Connected to MySQL");
    }
});
app.post('/api/signup', (req, res) => {
    const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, req.body.password];

    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json("User registered");
    });
});
app.post('/api/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json("Error");
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});
app.post('/contact', (req, res) => {
    const sql = "INSERT INTO contacts (`name`, `email`, `message`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.message
    ];
    
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json("Success");
    });
});
app.get('/api/activities', (req, res) => {
    const sql = "SELECT * FROM activities ORDER BY date DESC";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});
app.post('/api/activities', (req, res) => {
    const sql = "INSERT INTO activities (`type`, `date`, `val`, `notes`) VALUES (?)";
    const values = [req.body.type, req.body.date, req.body.val, req.body.notes];

    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});
app.put('/api/activities/:id', (req, res) => {
    const sql = "UPDATE activities SET `type` = ?, `date` = ?, `val` = ?, `notes` = ? WHERE id = ?";
    const values = [req.body.type, req.body.date, req.body.val, req.body.notes];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json("Updated");
    });
});
app.delete('/api/activities/:id', (req, res) => {
    const sql = "DELETE FROM activities WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json("Deleted");
    });
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});