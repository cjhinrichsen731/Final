var mongoose = require('mongoose');
var updateSchema = mongoose.Schema({
        model     : String,
        price     : Number,
        location  : Number
    });
module.exports = mongoose.model('update', updateSchema, 'updates')
