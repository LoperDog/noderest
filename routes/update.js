var express = require('express');

var userInfo = require('../models/mongoDB');

var router = express.Router();

/* 
 * POST Update API. 
 * requ : Id
 * option : Name, Level, Money
 * return : update result { Id, Name, Level, Money }
 */
router.post('/',function(req, res, next) {
    if(req.body.Id == null){
        console.log("update : Empty Id");
        res.send("check your Id");
    }else {
        userInfo.findOne({Id : req.body.Id}, function(error, result){
            if(error){
                console.log(error);
                res.send('Cant find Id');
            }else {
                result.Name = (req.body.Name == null) ? result.Name : req.body.Name;
                result.Level = (req.body.Level == null) ? result.Level : req.body.Level;
                result.Money = (req.body.Money == null) ? result.Money : req.body.Money;
                result.save(function(error){
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
    }
});

module.exports = router;
