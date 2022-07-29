require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connection } = require('mongoose');
const { connectDB } = require('./utils/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// ROUTES
// app.use('/api/users');

connection.once('open', () => {
	console.log('Connected to MongoDB');
	app.listen(process.env.PORT, () => console.log(`Connected => http://localhost:${process.env.PORT}`));
});
