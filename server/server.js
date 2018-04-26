const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const foodArray = require('./modules/food-array');

const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static('server/public'));

app.get('/foods', (req, res) => {
    res.send(foodArray);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});