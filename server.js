const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./config/db');
const bodyParser = require('body-parser');
const hiraganaRoutes = require('./routes/hiraganaRoutes')
const cardsRoutes = require('./routes/cardsRoutes')
require ('dotenv').config();

const app = express();

dbConnection();

app.use(cors());

// Configuración body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/hiragana', hiraganaRoutes)
app.use('/myCards', cardsRoutes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
