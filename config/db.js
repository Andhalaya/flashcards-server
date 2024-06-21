const mysql = require('mysql2');
const mongoose = require('mongoose');
require ('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'flashcards'
});

const dbConnection = async() => {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to the MongoDB database');
  } catch (error) {
      console.error(error);
      throw new Error('Error a la hora de iniciar la base de datos');
  }
};

module.exports = {connection, dbConnection};