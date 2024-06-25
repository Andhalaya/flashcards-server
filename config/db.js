const {createClient} = require('@libsql/client')
const mongoose = require('mongoose');
require ('dotenv').config();

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
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

module.exports = {turso, dbConnection};