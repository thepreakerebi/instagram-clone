const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hello World, Welcome to the Grandeur</h1>`);
});

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server is running at port', PORT);
});
