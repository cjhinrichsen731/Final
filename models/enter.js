var mongoose = require('mongoose');
var armsSchema = mongoose.Schema({
        model     : String,
        price     : Number,
        date      : Number, 
        location  : Number
    });
module.exports = mongoose.model('arm', armsSchema, 'arms')
