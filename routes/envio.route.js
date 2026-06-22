const express = require('express');
const router = express.Router();
const envioController = require('../controllers/envio.controller');

router.post('/', envioController.save);                  // Registrar envío
router.get('/', envioController.listActivos);            // Consultar activos
router.get('/:idPedido', envioController.show);          // Buscar por ID de Pedido
router.put('/:idPedido', envioController.editEstado);    // Actualizar estado

module.exports = router;