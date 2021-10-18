const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

router.get("/ingresar", usuariosController.login);

router.get("/registrarse", usuariosController.registrarse);

router.get("/cerrarSesion", usuariosController.logout);

router.post("/acceder", usuariosController.acceso);

router.post("/guardar", usuariosController.guardar);


module.exports = router;