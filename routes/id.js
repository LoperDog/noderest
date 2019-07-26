var express = require('express');

var userInfo = require('../models/mongoDB');

var router = express.Router();

/* GET Id Page. */
router.get('/', function(req, res, next) {
    userInfo.find(function(error, result){
        if(error){
            console.log(error);
            res.send('selecet error');
        }else {
            console.log(result);
            res.send(result);
        }
    });
    /*
    console.log(req.body.Id);
    userInfo.findOne({Id:req.body.Id}, function(error, result){
        if(error){
            console.log(error);
        }else {
            res.send(result);
            console.log(result);
        }
    });*/
});

module.exports = router;
