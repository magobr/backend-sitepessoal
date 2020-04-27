const express = require('express');
const session = require('express-session');

const routes = require('./routes');



const app = express();

app.use(session({
    secret: "ssh, its a secret!",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 4000000
    }
}));

// Requisição cross-origin
app.use( (req, res, next)=> {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.json());
app.use(routes);

var port = 3333
app.listen(port, () => {
    console.log('Servidor aberto! acesse: http://localhost:' + port);
});