const express = require("express");
const router = express.Router();
const peliculasController = require("../controllers/peliculasController")

router.get("/detalle/:id", peliculasController.detalle)

router.get("/crear", peliculasController.crear)

router.get("/editar/:id", peliculasController.editar)

router.post("/guardar", peliculasController.guardar)

router.put("/actualizar/:id", peliculasController.actualizar)

router.delete("/borrar/:id", peliculasController.borrar)


module.exports = router;