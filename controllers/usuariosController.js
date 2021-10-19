const db = require("../database/models");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

module.exports = {
    login: async (req,res) => {
        return res.render("login",{title:"Acceso"})
    },
    acceso: async (req,res) => {
        try{
            const errors = validationResult(req);
            
            if (!errors.isEmpty()){
                return res.render("/", { errors: errors.mapped(),title:"Acceso", old:req.body });
            }else{
                let usuario = await db.User.findOne({where: {email: req.body.correo}});
                req.session.user = usuario;
                
                if(req.body.recordarme){
                    res.cookie("email",req.body.correo,{maxAge:300000})
                }
                
                return res.redirect("/")
            }
        }catch(error){
            res.send(error)
        }
    },
    registrarse: (req,res) => {
        return res.render("registro")
    },
    guardar: async (req,res) => {
        try{
            let resultadoValidacion = validationResult(req)

            if(resultadoValidacion.errors.length > 0){
                return res.render("registro",{
                    errors: resultadoValidacion.mapped(),
                    oldData: req.body
                })
            }

            await db.User.create({
                name: req.body.nombre,
                email: req.body.correo,
                password: bcrypt.hashSync(req.body.clave,10),
                admin: 0
            });

            return res.redirect("/")
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }   
    },
    logout: async (req,res) => {
        try{
            let user = await db.User.findByPk(req.session.user.id)
            res.clearCookie("email",user.email,{maxAge:0})
            delete req.session.user
            return res.redirect("/")
        }catch (error) {
            console.log(error);
            res.send(error);
        }
    } 
}