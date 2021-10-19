const express = require("express");
const router = express.Router();
const peliculasController = require("../controllers/peliculasController")
const validarCreacion = require('../middlewares/validarCreacion');

router.get("/detalle/:id", peliculasController.detalle);

router.get("/crear", peliculasController.crear);

router.get("/editar/:id", peliculasController.editar);

router.post("/guardar",validarCreacion, peliculasController.guardar);

router.put("/actualizar/:id",validarCreacion, peliculasController.actualizar);

router.delete("/borrar/:id", peliculasController.borrar);


module.exports = router;