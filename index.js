const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users.js');

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});