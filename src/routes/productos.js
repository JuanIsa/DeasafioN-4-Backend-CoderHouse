'use strict';
import { Router } from 'express';
import  Contenedor  from '../resources/handlerFiles.js';

const productosRoute = Router();
const archivo = new Contenedor('productos.txt');

//Obtener la lista completa de archivos.
productosRoute.get('/', (req, res) => {
    archivo.getAll().then(dataFile => res.send(dataFile));
});

//Obtener registro por ID.
productosRoute.get('/:id', (req, res) => {
    archivo.getById(parseInt(req.params.id)).then(dataFile => res.send(dataFile));
});

//Ingresar un registro nuevo.
productosRoute.post('/', (req, res) => {
    archivo.save(req.body).then(dataFile => res.send(dataFile));
});

//Borrar un registro  por ID.
productosRoute.delete('/:id', (req, res) => {
    archivo.deleteById(parseInt(req.params.id)).then(dataFile => res.send(dataFile));
});

//Modificar un registro por ID.
productosRoute.put('/:id', (req, res) => {
    archivo.updateById(parseInt(req.params.id), req.body).then(dataFile => res.send(dataFile));
});

export default productosRoute;