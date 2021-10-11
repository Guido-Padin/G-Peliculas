const express = require("express");
const router = express.Router();
const peliculasController = require("../controllers/peliculasController")

router.get("/detalle", peliculasController.detalle)

router.get("/crear", peliculasController.crear)

router.get("/editar", peliculasController.editar)


module.exports = router;