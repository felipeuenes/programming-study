const express = require('express');
const app = express();
const port = 3000

app.listen(port, console.log(`Servidor conectado na porta ${port}`))


app.use(express.json());

const routes = require('./router');
app.use(routes);

