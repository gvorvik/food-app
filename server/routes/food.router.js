const express = require('express');
const router = express.Router();

const Food = require('../models/food.schema');

router.get('/', (req, res) => {
    Food.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log('uh oh', error);
        });
});

module.exports = router;