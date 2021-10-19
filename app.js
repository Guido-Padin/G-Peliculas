//------Requires------        
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");


//------Requires de Rutas------
const mainRouter = require("./routes/mainRouter");
const peliculasRouter = require("./routes/peliculasRouter");
const usuariosRouter = require("./routes/usuariosRouter");

//------Levantando el Servidor------
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Server start in http://localhost:"+app.get("port")));

//------Configuraciones------
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(session({secret:"Buenas pelis"}));
app.use(cookies())

//------EJS Template Engine------
app.set("view engine", "ejs");

//------Middlewares------
app.use(require("./middlewares/usuario"));

//-------Rutas------
app.use(mainRouter);
app.use("/pelicula", peliculasRouter);
app.use("/usuario", usuariosRouter);

