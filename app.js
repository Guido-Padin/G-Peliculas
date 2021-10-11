const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");


const mainRouter = require("./routes/mainRouter");
const peliculasRouter = require("./routes/peliculasRouter");
const usuariosRouter = require("./routes/usuariosRouter");

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Server start in http://localhost:"+app.get("port")));

app.use(methodOverride('_method'));

app.set("view engine", "ejs");

app.use(mainRouter);
app.use("/pelicula", peliculasRouter);
app.use("/usuario", usuariosRouter);

