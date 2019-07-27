var express = require('express');

var userInfo = require('../models/mongoDB');

var router = express.Router();

/* 
 * POST Insert API. 
 * requ : Id
 * return : save result { Id, Name, Level, Money }
 */
router.post('/',function(req, res, next) {
    if(req.body.Id == null || req.body.Name == null){
        console.log("insert : Empty Id or Name");
        res.send("check Id and Name");
    }else {
        userInfo.findOne({Id:req.body.Id},function(error,result){
            if(error){
                console.log(error);
                res.send("Insert error");
            }else {
                if(result == null){
                    var newuser = new userInfo({
                        Id : req.body.Id,
                        Name : req.body.Name,
                        Level : (req.body.Level == null)?"1":req.body.Level,
                        Money : (req.body.Money == null)?"0":req.body.Money
                    });
                    newuser.save(function(error){
                        if(error){
                            console.log(error);
                            res.send('insert error');
                        }else {
                            userInfo.findOne({Id : newuser.Id}, function(error, result){
                                if(error){
                                    console.log('serch fail');
                                    res.send('fail');
                                }else {
                                    console.log(result);
                                    res.send(result);
                                }
                            });
                        }
                    });
                }else {
                    console.log(result);
                    res.send("already exist");
                }
            }
        });
    }
});

module.exports = router;
