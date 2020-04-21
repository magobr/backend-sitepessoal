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

routes.post('/login', (req, res) =>{
    var dados = req.body;
    select.getLogin(dados, (err, response) =>{
        if (response.length > 0){
            req.session.login = true;
            req.session.user = dados.name;
            console.log(req.session.login);
            res.setHeader('Content-Type', 'text/html')
            res.json(response);
            console.log('Logado');
        } else {
            console.log('login incorreto');
            res.end();
        }

        
    })
})

routes.post('/saveuser', (req, res) => {
    var dados = req.body;
    if (req.session.login){
        create.userCreate(dados, (err, response) => {
            res.json(req.body);
            console.log(dados);
        });
    } else{
        console.log('Faça o login');
        res.end()
    }
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