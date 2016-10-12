var mongoose = require('mongoose');
var expiredSchema = mongoose.Schema({
        model     : String,
        price     : Number,
        date      : Number,
        location  : Number
    });
module.exports = mongoose.model('expired', expiredSchema, 'expireds')
