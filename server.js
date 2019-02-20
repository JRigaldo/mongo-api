const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const server = express();

mongoose.Promise = global.Promise;
server.use(bodyParser.json());
server.set('json spaces', 2);
routes(server);

server.listen(3050, () => {
    console.log("Ecoute du port 3050");
    mongoose.connect('mongodb://localhost/user_api_database', {
        useNewUrlParser: true
    });

    mongoose.connection
        .once('open', () => console.log("la connexion est établie !"))
        .on('error', () => {
            console.warn("Erreur durant la connexion", error);
        });
});