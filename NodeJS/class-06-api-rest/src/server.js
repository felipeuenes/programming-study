const express = require('express');
const app = express();


app.listen(3000, console.log('server rodando'));

app.use(express.json());

const routes = require('./routes')
app.use(routes);

