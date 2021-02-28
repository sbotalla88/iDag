const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Item = require('./Item');

router.post('/', function (req, res) {
    Item.create({
        name: req.body.name
    }, 
    function (err, item) {
        if (err) return res.status(500).send("There was a problem adding the Item to the database.");
        res.status(200).send(item);
    });
});

router.get('/', function (req, res) {
    Item.find({}, function (err, items) {
        if (err) return res.status(500).send("There was a problem finding the Items.");
        res.status(200).send(items);
    });
});

module.exports = router;