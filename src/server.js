const express = require('express');
const session = require('express-session');

const routes = require('./routes');



const app = express();

app.use(session({
    secret: "ssh, its a secret!",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));

app.use(express.json());
app.use(routes);

var port = 3333
app.listen(port, () => {
    console.log('Servidor aberto! acesse: http://localhost:' + port);
});