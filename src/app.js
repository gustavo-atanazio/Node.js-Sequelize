const express = require('express');
const routes = require('@app/routes');

const app = express();

app.get('/teste', (req, res) => {
    res
        .status(200)
        .send({ mensagem: 'boas-vindas à API' })
    ;
});

routes(app);

module.exports = app;