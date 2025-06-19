const express =require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const postRoute = require ('./routes/post');
app.use('/servicios', postRoute);

mongoose.connect('mongodb+srv://dashilatrasena:EzbOxZEmdJRPjZFv@apievidencia.ls3snwv.mongodb.net/post?retryWrites=true&w=majority&appName=APIevidencia',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.listen(10000);