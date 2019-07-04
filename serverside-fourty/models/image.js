var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uploadSchema = new Schema({
    image: { type: String, required: true }

});

module.exports = mongoose.model('Image', uploadSchema);