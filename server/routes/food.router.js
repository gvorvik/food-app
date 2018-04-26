const express = require('express');
const router = express.Router();

const foodArray = require('../modules/food-array');

router.get('/', (req, res) => {
    res.send(foodArray);
});

module.exports = router;