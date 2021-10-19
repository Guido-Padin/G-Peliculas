const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");
const validarRegistro = require('../middlewares/validarRegistro');
const validarLogin = require('../middlewares/validarLogin');

router.get("/ingresar", usuariosController.login);

router.get("/registrarse", usuariosController.registrarse);

router.get("/cerrarSesion", usuariosController.logout);

router.post("/acceder",validarLogin, usuariosController.acceso);

router.post("/guardar",validarRegistro, usuariosController.guardar);


module.exports = router;