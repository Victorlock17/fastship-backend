const EnvioModel = require("../models/envio.model");

const envioController = {
    // Registrar un nuevo envío (POST)
    async save(req, res) {
        try {
            const envio = new EnvioModel(req.body);
            await envio.save();
            res.status(201).json(envio);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar solo el estado del envío (PUT)
    async editEstado(req, res) {
        try {
            const { estado } = req.body;
            
            // Validación del estado permitido
            if (!['pendiente', 'en tránsito', 'entregado'].includes(estado)) {
                return res.status(400).json({ mensaje: 'Estado no válido' });
            }

            const envio = await EnvioModel.findOneAndUpdate(
                { idPedido: req.params.idPedido },
                { estado },
                { new: true }
            );

            if (!envio) 
                return res.status(404).json({ mensaje: 'Envío no encontrado' });
                
            res.json(envio);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Consultar envíos activos (GET) -> Estado diferente de "entregado"
    async listActivos(req, res) {
        try {
            const enviosActivos = await EnvioModel.find({ estado: { $ne: 'entregado' } });
            res.json(enviosActivos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Buscar envío por idPedido (GET)
    async show(req, res) {
        try {
            const envio = await EnvioModel.findOne({ idPedido: req.params.idPedido });
            if (!envio) 
                return res.status(404).json({ mensaje: 'Envío no encontrado' });
            res.json(envio);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = envioController;