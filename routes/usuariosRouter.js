const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController")

router.get("/ingresar", usuariosController.login)

router.get("/registrarse", usuariosController.registrarse)

router.get("/perfil/:id", usuariosController.perfil)

router.get("/editar/:id", usuariosController.editar)

router.post("/acceder", usuariosController.acceso)

router.post("/guardar", usuariosController.guardar)

router.put("/actualizar/:id", usuariosController.actualizar)

router.delete("/borrar/:id", usuariosController.borrar)

module.exports = router;