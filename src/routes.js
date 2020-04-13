const express = require('express');
const select = require('./models/select');

const routes = express.Router();

routes.get('/users', (req, res) => {

    select.getDados((err, response) =>{
        res.json(response)
    });
    

});

module.exports = routes;
