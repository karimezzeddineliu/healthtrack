const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "brmpwfkc4x8qy8uhgdz7-mysql.services.clever-cloud.com",
    user: "uj9kzdsptyokngrb",
    password: "vWbNcy8lfyxqoViye1Tz",
    database: "brmpwfkc4x8qy8uhgdz7",
    port: 3306
});
db.connect((err) => {
    if (err) console.log("Error connecting to DB:", err);
    else console.log("Connected to MySQL Cloud Database");
});
app.get('/fix-db', (req, res) => {
    const sql = "ALTER TABLE activities ADD COLUMN time VARCHAR(20) AFTER date";
    db.query(sql, (err, result) => {
        if(err) {
            return res.json("Database might already be fixed or error: " + err.message);
        }
        return res.json("SUCCESS! 'time' column added to database.");
    });
});
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("User registered");
    });
});
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json("Error");
        if(data.length > 0) return res.json("Success");
        else return res.json("Fail");
    });
});
app.get('/api/activities', (req, res) => {
    const sql = "SELECT * FROM activities ORDER BY date DESC, time DESC";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});
app.post('/api/activities', (req, res) => {
    const sql = "INSERT INTO activities (`type`, `date`, `time`, `val`, `notes`) VALUES (?)";
    const values = [req.body.type, req.body.date, req.body.time, req.body.val, req.body.notes];

    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.put('/api/activities/:id', (req, res) => {
    const sql = "UPDATE activities SET `type` = ?, `date` = ?, `time` = ?, `val` = ?, `notes` = ? WHERE id = ?";
    const values = [req.body.type, req.body.date, req.body.time, req.body.val, req.body.notes];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json(err);
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});