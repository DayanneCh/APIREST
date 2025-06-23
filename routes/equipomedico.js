const express = require('express');
const router = express.Router();
const Equipomedico = require('../models/Equipomedico'); //importar el modelo

router.get('/', async (req, res)=> { //llamar todos los post de la base de datos
    try {
        const equiposmedicos = await Equipomedico.find();
        res.json(equiposmedicos); 
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});
router.get('/:equipomedicoId', async (req,res) =>{ //llama por identificador
     try {
        const equipomedico = await Equipomedico.findById(req.params.equipomedicoId);
        res.json(equipomedico); 
    } catch (err) {
        res.json({ message: err.message});
    }  
});
router.post('/', async (req,res) => { //crear un post
    const equipomedico = new Equipomedico ({
        placa:req.body.placa,
        equipo:req.body.equipo,
        marca:req.body.marca,
        modelo:req.body.modelo,
        serie:req.body.serie,
    });
    try {
        const savedEquipomedico = await equipomedico.save(); //guardar el nuevo post
        res.json(savedEquipomedico);
    } catch (err) {
        res.json({ message: err.message});
    }
});
router.patch('/:equipomedicoId', async (req,res) => { // actualizar un post
    try {
    const updatedEquipomedico = await Equipomedico.updateOne ( 
        {_id: req.params.equipomedicoId }, { $set: { placa: req.body.placa, equipo: req.body.equipo, marca: req.body.marca, modelo: req.body.modelo, serie: req.body.serie }});
        res.json(updatedEquipomedico);
    } catch (err) {
        res.json({ message: err.message});
     }
});
router.delete('/:equipomedicoId', async (req, res) => { //eliminar un post
 try {
    const removedEquipomedico = await Equipomedico.findByIdAndDelete(req.params.equipomedicoId);
    if (!removedPost){
        return res.status(404).json({ message: 'Equipo medico no encontrado'});
    }
 } catch (err) {
    res.status(500).json({ message: "Error de conexion" });
 }
 });

module.exports =router; //exporto el router