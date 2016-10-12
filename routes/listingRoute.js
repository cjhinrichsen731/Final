var Listing = require('../models/profileListing.js')

module.exports = {
    get: (req,res) => {

        Listing.find({}, (err, listings) => {
            if (err) {
                res.json(err)
            } 
            res.json(listings)
        })
    }, 
    submitListing: (req, res) => {
    var list = new Listing (req.body) 
    list.save(function (err, listing){
        if (err){
            return res.json(err);
        }
        res.send(listing)
    
    })},
        getListing: (req, res) => {
        Listing.find({}, 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
            res.send(result)
            }
        })
    }
}

