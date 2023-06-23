const config = require('./config.json')
const host = config.host;
const port = config.port; 

const express = require('express')
const app = express()

const bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index')
})

app.listen(port)
console.log("App on port" + port);