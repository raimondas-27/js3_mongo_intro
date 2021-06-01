const express = require('express');
const config = require("./config/config");

const app = express();

console.log(config)

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.listen(5000);

app.get('/', (req, res) => res.render('index'));