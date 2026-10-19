const express = require('express');
const mongoose = require('mongoose');

const studentRouter = require('./routers/studentRouter');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', studentRouter);

mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase')
    .then(() => {
        console.log('Connected to StudentDatabase');

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
    });
