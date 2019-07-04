var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ecommerceSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    rate: { type: Number },
    desc: { type: String},
    price: { type: Number, required: true  },
    brand: { type: String },
    detail: { type: String },
    image: { type: String }

});

module.exports = mongoose.model('Ecommerce', ecommerceSchema);
// ready to go!