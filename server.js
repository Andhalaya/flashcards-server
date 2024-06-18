const express = require('express');
const cors = require('cors');
const {connection} = require('./config/db');
const bodyParser = require('body-parser');
const hiraganaRoutes = require('./routes/hiraganaRoutes')
require ('dotenv').config();

const app = express();
app.use(cors());

// Configuración body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});


app.use('/hiragana', hiraganaRoutes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
