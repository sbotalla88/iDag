const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({  
    name: String
});

mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Item');