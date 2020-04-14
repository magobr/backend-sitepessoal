const express = require('express');

const select = require('./models/select');
const create = require('./models/create');
const dataDelete = require('./models/delete');
const dataUpdate = require('./models/update');

const routes = express.Router();

routes.get('/users', (req, res) => {
    select.getDados((err, response) =>{
        res.json(response)
    });
});

routes.get('/users/:id?', (req, res) =>{
    console.log(req.params.id);
    select.getDadosById(req.params.id, (err, response) =>{
        res.json(response)
    });
});

routes.post('/saveuser', (req, res) => {
    var dados = req.body;
    create.userCreate(dados, (err, response) => {
        res.json(req.body);
        console.log(dados);
    });
});

routes.delete('/usersDelete/:id', (req, res) =>{
    var id = req.params.id; 
    dataDelete.userDelete(id, (err, count) =>{
        console.log(id);
        res.json(count);
    })
})

routes.put('/usersUpdate/:id', (req, res) => {
    var id = req.params.id;
    var data = req.body
    dataUpdate.userUpdate(data, id, (err, response) =>{
        res.json(response);
    });
});

module.exports = routes;