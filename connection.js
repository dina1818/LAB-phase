const mongoose = require('mongoose');
require('dotenv').config();

const username = 'fty-tghikj'; // Replace with your actual username
const password = 'gDXUcx9BIztUCSVP'; // Replace with your actual password

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ogajl1l.mongodb.net/`, () => {
  console.log('connected to mongodb');
});
