var express = require('express');

var userInfo = require('../models/mongoDB');

var router = express.Router();

/* GET Delete API. */
router.post('/',function(req, res, next) {
    console.log(req);
    userInfo.findOne({Id : req.body.Id}, function(error, result){
        if(error){
            console.log(error);
            res.send('Cant find Id');
        }else {
            userInfo.remove({Id:result.Id},function(error,output){
                if(error){
                    console.log(error);
                    res.send('Cant delete User');
                }
                console.log('removed');
                res.send('end');
            });
        }
    });
});

module.exports = router;
