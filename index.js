const express =require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const postRoute = require ('./routes/post'); //conexion con las rutas
app.use('/servicios', postRoute);

mongoose.connect('mongodb+srv://dashilatrasena:EzbOxZEmdJRPjZFv@apievidencia.ls3snwv.mongodb.net/post?retryWrites=true&w=majority&appName=APIevidencia',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection; //creo conexion a la base de datos
connection.once('open', () => {
 console.log('MongoDB conexion de base de datos establecida');
});

app.listen(10000); //puerto donde se genera conexion