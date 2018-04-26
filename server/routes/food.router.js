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

    router.post('/', (req, res) => {
        const foodAdd = req.body;
        console.log(foodAdd);
        Food.create(foodAdd)
            .then((data) => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log('error', error);
                res.sendStatus(500);
            });
    });
});

module.exports = router;