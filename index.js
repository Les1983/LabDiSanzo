const express = require('express');
const hbs = require('hbs');
const server = express();

// Declaro motor de las vistas
server.set('view engine', 'hbs');

// Declaro carpeta de archivos estáticos
server.use(express.static('public'));

server.get("/", function(request, response) {
    response.render('index');
});

server.listen(3000);