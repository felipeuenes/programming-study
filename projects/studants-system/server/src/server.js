const express = require('express')
const app = express();

app.listen(3000, console.log('server is running on port 3000'))


app.use(express.json());

const routes = require('./routes')
app.use(routes);

const prisma = require('./database')
prisma.$connect()
    .then(() => console.log('Database is connect'))
    .catch((error) => console.error(error));

