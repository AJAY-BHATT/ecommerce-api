// importing required packages
const express = require('express');
const port = 8006; // assigning port, so that I can try and test as this post,

const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(port, function(){
    console.log('API is live on http://localhost:8006/products');
});