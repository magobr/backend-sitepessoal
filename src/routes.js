const express = require('express');

const select = require('./models/select');
const create = require('./models/create');
const dataDelete = require('./models/delete');
const dataUpdate = require('./models/update');

const routes = express.Router();

routes.get('/users', (req, res) => {
        select.getDados((err, response) =>{
            if(err)throw err;
            res.json(response)
        });
});

routes.get('/users/:id?', (req, res) =>{

    console.log(req.params.id);
    select.getDadosById(req.params.id, (err, response) =>{
        if(err) throw err
        res.json(response)
    });

});

routes.post('/login', (req, res) =>{

    var dados = req.body;

    select.getLogin(dados, (err, response) =>{
        if (response.length > 0){
            req.session.loggedin = true;
            req.session.user = dados.name;
            res.setHeader('Content-Type', 'text/html')
            res.json(response);
            console.log('Logado');
        } else {
            console.log('login incorreto');
            res.end();
        } if (err){
            throw err;
        }
    })
})

routes.post('/saveuser', (req, res) => {

    var dados = req.body;

    console.log(req.session.loggedin);

    if (req.session.loggedin){
        create.userCreate(dados, (err, response) => {
            if (err) throw err;
            res.json(response);
            console.log(dados);
        });
    } else{
        console.log('Faça o login');
        res.end()
    }

});

routes.delete('/usersDelete/:id', (req, res) =>{

    var id = req.params.id; 

    if(req.session.loggedin){
        dataDelete.userDelete(id, (err, count) =>{
            console.log(id);
            res.json(count);
        })
    } else {
        console.log('Faça o login');
        res.end()
    }

})

routes.put('/usersUpdate/:id', (req, res) => {
    

    var id = req.params.id;
    var data = req.body

    if(req.session.loggedin){
        dataUpdate.userUpdate(data, id, (err, response) =>{
            res.json(response);
        });
    } else{
        console.log('Faça o login');
        res.end()
    }

});

module.exports = routes;