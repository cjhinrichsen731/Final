var expiredRoute = require('../models/profileExpired')

module.exports = {
    get: (req,res) => {

        if(req.params.id) {
            updatedArms.findOne({_id: req.params.id}, (err, updateArms) => {
                res.json(arms);
            });
        }
  //      else {
    //        Arms.find({}, (err,updateArms) => {
//
  //              res.json(updateArms);
    //        });
      //  }
    }
}