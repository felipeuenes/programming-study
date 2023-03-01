const express = require('express');
const app = express();


app.listen(3000, console.log('server rodando'));

app.use(express.json());

const routes = require('./routes')
app.use(routes);

const prisma = require('./database')
prisma.$connect()
.then(() => console.log('deu certo!!!!!!'))
.catch((error) => console.log(error));
