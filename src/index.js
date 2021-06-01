const express = require("express");
const mongoose = require("mongoose");
const mongoDbString = require("./config/config");

const app = express();


//prisijungimas prie duombazes
mongoose.connect(mongoDbString,{ useNewUrlParser : true, useUnifiedTopology : true})

app.set("view engine", "ejs");
app.set("views", "src/views");

app.listen(5000);

app.get("/", (req, res) => res.render('index'));