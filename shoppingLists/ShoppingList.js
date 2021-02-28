const mongoose = require('mongoose');

const ShoppingListSchema = new mongoose.Schema({  
    name: String,
    items: Array,
});

mongoose.model('ShoppingList', ShoppingListSchema);
module.exports = mongoose.model('ShoppingList');