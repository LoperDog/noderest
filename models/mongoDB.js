var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Id : 'string',
    Name : 'string',
    Level : 'number',
    Money : 'number'
});

module.exports = mongoose.model('user', UserSchema);