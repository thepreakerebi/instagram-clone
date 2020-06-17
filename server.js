const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const users = require('./routes/auth');
const posts = require('./routes/post');

const app = express();

app.use(express.json());

app.use('/api/v1', users);
app.use('/api/v1', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server is running at port', PORT);
});
