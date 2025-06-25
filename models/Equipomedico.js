const mongoose = require('mongoose'); //conexion a una base de datos no relacional en la nube
const EquipomedicoSchema = mongoose.Schema({

placa: {
    type:String,
    required:true
},
equipo: {
    type:String,
    required: true
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
module.exports = mongoose.model('Equipomedico', EquipomedicoSchema); //exporto el modelo