var enterRoute = require('../models/enter')
    module.exports= {
    upsert: (req,res) => {

        if (req.params.id) {
            Arms.insertMany(req.body, function(err, data) {
               if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            });
            
            var newArms = new Arm(req.body);
            newArms.save(function(err,data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            });
                /*
        } else if (req.body.length >= 1) {
            Arms.insertMany(req.body, function(err, data) {
               if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            });

        } else {
            var newArms = new Arm(req.body);
            newArms.save(function(err,data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            });
            */
        }
    }
}