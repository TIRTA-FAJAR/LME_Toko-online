const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// koneksi
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passsword: '',
    database: 'userdb',
});

db.connect((err) => {
    if (err) {
    console.error('Database gagal terkoneksi: ', err.stack);
    return;
    }
    console.log('database berhasil terkoneksi.');
});





