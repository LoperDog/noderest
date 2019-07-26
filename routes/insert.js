var express = require('express');

var userInfo = require('../models/mongoDB');

var router = express.Router();

/* GET Insert API. */
router.post('/',function(req, res, next) {
    console.log(req);
    var newuser = new userInfo({
        Id : req.body.Id,
        Name : req.body.Name,
        Level : req.body.Level,
        Money : req.body.Money
    });
    newuser.save(function(error){
        if(error){
            console.log(error);
            res.send('insert error');
        }else {
            userInfo.find(function(error, result){
                if(error){
                    console.log('serch fair');
                    res.send('fair');
                }else {
                    console.log(result);
                    res.send(result);
                }
            });
        }
    });
});

module.exports = router;
