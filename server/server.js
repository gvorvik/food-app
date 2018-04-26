const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const foodRouter = require('./routes/food.router');

const PORT = process.env.PORT || 5000;

const databaseUrl = 'mongodb://localhost:27017/kitchen'
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
    
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error);
});


app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static('server/public'));

app.use('/foods', foodRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});