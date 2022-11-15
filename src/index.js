'use strict';
import express from 'express';
import productosRoute from './routes/productos.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/productos', productosRoute);

app.get('*', (req, res) => {
    res.status(404).send('<h1>Recurso no encontrado</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}.`);
});