const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const foodRouter = require('./routes/food.router');

const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static('server/public'));

app.use('/foods', foodRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});