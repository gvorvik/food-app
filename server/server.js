const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static('server/public'));

app.get('/foods', (req, res) => {
    res.send('Get request Got');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});