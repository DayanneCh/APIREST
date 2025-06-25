const express =require('express');
const app = express(); // contiene una funcion del paquete
const mongoose = require('mongoose'); //conexion a una base de datos no relacional
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser'); //convertir en formato JSON
app.use(bodyParser.json()); //recibe la inforermacion y la convierte en formato JSON

const equipomedicoRoute = require ('./routes/equipomedico'); //conexion con las rutas
app.use('/servicios', equipomedicoRoute);

mongoose.connect('mongodb+srv://dashilatrasena:EzbOxZEmdJRPjZFv@apievidencia.ls3snwv.mongodb.net/post?retryWrites=true&w=majority&appName=APIevidencia',{
    useNewUrlParser: true, //Observar que tipo de errores para que garantice la conexion a la base de datos
    useUnifiedTopology: true
});

const connection = mongoose.connection; //creo conexion a la base de datos
connection.once('open', () => {
 console.log('MongoDB conexion de base de datos establecida');
});

app.listen(10000); //puerto donde se genera conexion