var express = require('express');

var userInfo = require('../models/mongoDB');

var router = express.Router();

/* 
 * GET Id Page.
 * requ : Id
 * return : Id, Name, Level, Money
*/
router.get('/', function(req, res, next) {
    if(req.body.Id == null){
        console.log('id : Empty Id');
        res.send('No Id');
    }
    else {
        userInfo.findOne({Id:req.body.Id}, function(error, result){
            if(error){
                console.log(error);
                res.send(error);
            }else {
                console.log(result);
                res.send(result);
            }
        });
    }
});

module.exports = router;
