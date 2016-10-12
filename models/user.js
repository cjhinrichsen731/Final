//'use strict'

var SALT = 10

var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    UserSchema = new mongoose.Schema({
        name     : String,
        email    : { type: String, unique: true },
        password : String,
        created  : Number 
    });

UserSchema.pre('save', function(next) {
    var user = this;

    if ( !user.isModified('password') ) {
        return next();
    }

    bcrypt.genSalt(SALT, (saltErr, salt) => {
        if (saltErr) {
            return next(saltErr);
        }

        bcrypt.hash(user.password, salt, (hashErr, hash) => {
            if (hashErr) {
                return next(hashErr);
            }

            user.password = hash;
            next();
        });
    });
})

module.exports = mongoose.model('User', UserSchema)
