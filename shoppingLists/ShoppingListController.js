const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Item = require('../items/Item');
const List = require('./ShoppingList');

router.post('/', async function (req, res) {
    let items;
    await Item.find({}, async function(err, result){
        items = result;
    });
    
    req.body.items = JSON.parse(req.body.items)
    let newItems = [];
    items.map(item=>{
        if(req.body.items.includes(`${item._id}`)){
            newItems.push(item._id)
        }
    })
    if(newItems.length == req.body.items.length){
        List.create({
            name: req.body.name,
            items: req.body.items
        }, 
        function (err, List) {
            if (err) return res.status(500).send("There was a problem adding the List to the database.");
            res.status(200).send(List);
        });
    } else {
        res.status(400).send("Item(s) doesn't not exist");
    }
    
});

router.get('/', function (req, res) {
    List.find({}, function (err, lists) {
        if (err) return res.status(500).send("There was a problem finding the Lists.");
        res.status(200).send(lists);
    });
});

module.exports = router;