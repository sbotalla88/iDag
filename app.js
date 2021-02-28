const express = require('express');
const app = express();
const db = require('./db');
const ItemController = require('./items/ItemController');
const ShoppingListController = require('./shoppingLists/ShoppingListController');
app.use('/Item', ItemController);
app.use('/ShoppingList', ShoppingListController);
module.exports = app;