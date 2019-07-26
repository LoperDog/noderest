var express = require('express');

var userInfo = require('../models/mongoDB');

var router = express.Router();

/* GET Update API. */
router.post('/',function(req, res, next) {
    console.log(req);
    userInfo.findOne({Id : req.body.Id}, function(error, result){
        if(error){
            console.log(error);
            res.send('Cant find Id');
        }else {
            var newuser = new userInfo({
                _id : result._id,
                Id : req.body.Id,
                Name : req.body.Name,
                Level : req.body.Level,
                Money : req.body.Money
            });
            newuser.save(function(error){
                if(error){
                    console.log(error);
                    res.send('Update error');
                }else {
                    userInfo.findById({_id:newuser._id},function(error, result){
                        if(error){
                            console.log(error);
                            res.send('result serch fair');
                        }else {
                            console.log('- Updated');
                            console.log(result);
                            res.send(result);
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
