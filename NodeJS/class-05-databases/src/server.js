const express = require('express');
const app = express()

app.listen(3000, console.log('Server is running on port 3000'));


const routes = require('./routes')
app.use(routes);


const prisma = require('./databases');
prisma.$connect
