const UsuarioModel = require("../models/usuario.model");

const usuarioController = {
    async list(req, res){ // Obtener todos los usuarios
        try {
            const usuarios = await UsuarioModel.find();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async show(req, res){ // Obtener un usuario por 
        try {
            const id = req.params.id;
            const usuario = await UsuarioModel.findById(id);
            if (!usuario) 
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async save(req, res){
         try {
            const usuario = new UsuarioModel(req.body);
            usuario.save();
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async edit(req, res){ // Actualizar un usuario
        try {
            const usuario = await UsuarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!usuario) 
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async remove(req, res){ // Eliminar usuario
    	try {
            const usuario = await UsuarioModel.findByIdAndDelete(req.params.id);
            if (!usuario) 
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.json({ mensaje: 'Usuario eliminado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
	},
};

module.exports = usuarioController;
