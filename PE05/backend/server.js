const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recipes', require('./routes'));

const PORT = process.env.PORT || 5000;

// Debugging log to verify server start
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});

