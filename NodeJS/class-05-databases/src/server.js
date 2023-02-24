const express = require('express');
const app = express()

app.listen(3000, console.log('Server is running on port 3000'));


const routes = require('./routes')
app.use(routes);

app.use(express.json());

const prisma = require('./databases');
prisma.$connect()
.then(() => console.log('Database is connected...'))
.catch((error) => console.error(error));
