const express = require('express');
const routes = require('./routes');


const app = express();

app.use(express.json());
app.use(routes);

var port = 3333
app.listen(port, () => {
    console.log('Servidor aberto! acesse: http://localhost:' + port);
});