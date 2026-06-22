const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

router.get('/', usuarioController.list);            // localhost:3000/usuarios/
router.get('/:id', usuarioController.show);         // localhost:3000/usuarios/485
router.post('/', usuarioController.save);           // localhost:3000/usuarios/
router.put('/:id', usuarioController.edit);         // localhost:3000/usuarios/485
router.delete('/:id', usuarioController.remove);    // localhost:3000/usuarios/485

module.exports = router;
