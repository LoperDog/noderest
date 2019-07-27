var express = require('express');

var userInfo = require('../models/mongoDB');

var router = express.Router();

/* 
 * POST Delete API.
 * requ : Id
 * return : success or fail
 */
router.post('/',function(req, res, next) {
    if(req.body.Id == null){
        console.log('del : Empty Id');
        res.send('No Id');
    }else {
        userInfo.findOne({Id : req.body.Id}, function(error, result){
            if(error || result == null){
                console.log(error);
                res.send('Cant find Id');
            }else {
                userInfo.remove({_id:result._id},function(error,output){
                    if(error){
                        console.log(error);
                        res.send('Cant delete User');
                    }
                    console.log('removed');
                    res.send('end');
                });
            }
        });
    }
});

module.exports = router;
