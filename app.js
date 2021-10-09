const express = require("express");
const path = require("path");
const app = express();

const peliculasRouter = require("./routes/peliculasRouter");

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Server start in http://localhost:"+app.get("port")));

app.set("view engine", "ejs");

app.use(peliculasRouter);
