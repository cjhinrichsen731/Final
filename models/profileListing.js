var mongoose = require('mongoose');
var listingSchema = mongoose.Schema({
        model     : String,
        lprice    : Number,
        hprice    : Number,
        location  : Number
    });
module.exports = mongoose.model('listing', listingSchema, 'listings')
