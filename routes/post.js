const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); //importar el modelo

router.get('/', async (req, res)=> { //llamar todos los post de la base de datos
    try {
        const posts = await Post.find();
        res.json(posts); 
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});
router.get('/:postId', async (req,res) =>{ //llama por identificador
     try {
        const post = await Post.findById(req.params.postId);
        res.json(post); 
    } catch (err) {
        res.json({ message: err.message});
    }  
});
router.post('/', async (req,res) => { //crear un post
    const post = new Post ({
        placa:req.body.placa,
        marca:req.body.marca,
        modelo:req.body.modelo,
        serie:req.body.serie,
    });
    try {
        const savedPost = await post.save(); //guardar el nuevo post
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err.message});
    }
});
router.patch('/:postId', async (req,res) => { // actualizar un post
    try {
    const updatedPost = await Post.updateOne ( 
        {_id: req.params.postId }, { $set: { placa: req.body.placa, marca: req.body.marca, modelo: req.body.modelo, serie: req.body.serie }});
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err.message});
     }
});
router.delete('/:postId', async (req, res) => { //eliminar un post
 try {
    const removedPost = await Post.findByIdAndDelete(req.params.postId);
    if (!removedPost){
        return res.status(404).json({ message: 'Post no encontrado'});
    }
 } catch (err) {
    res.status(500).json({ message: "Error de conexion" });
 }
 });

module.exports =router; //exporto el router