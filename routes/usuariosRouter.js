const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController")

router.get("/ingresar", usuariosController.login)

router.get("/registrarse", usuariosController.registrarse)

router.get("/perfil", usuariosController.perfil)

router.get("/editar", usuariosController.editar)

module.exports = router;