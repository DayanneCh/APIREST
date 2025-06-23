const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({

placa: {
    type:String,
    required:true
},
marca: {
    type:String,
    required: true
},
modelo: {
    type:String,
    required: true
},
serie: {
    type:String,
    required: true
},
date: {
    type:Date,
    default:Date.now
}

});
module.exports = mongoose.model('Post', PostSchema); //exporto el modelo