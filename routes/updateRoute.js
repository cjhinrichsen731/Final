var updateRoute = require('../models/profileUpdate')


module.exports = {
    get: (req,res) => {

        if(req.params.id) {
            Arms.find({}, (err,updateArms) => {

                res.json(updateArms);
        })
        }
  //      else {
   //         Arms.find({}, (err,updateArms) => {

  //              res.json(updateArms);
    //        });
    //    }
    }
}
