require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://victorgamarra_db_user:GGGUW2cLDcpSXeKw@cluster0.sizdlyo.mongodb.net/vgamarra-ADS8?appName=Cluster0';
mongoose.connect(mongoDB);

// Importar rutas de Envíos
const enviosRouter = require('./routes/envio.route');

app.get('/', (req, res) => {
  res.send('FastShip API Running!')
});

// Registrar la ruta en la API
app.use('/api/envios', enviosRouter);

app.listen(port, () => {
  console.log(`FastShip backend listening on port ${port}`)
});