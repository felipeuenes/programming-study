const express = require('express')
const app = express()


app.listen(3000, console.log("server is connect"));

app.use(express.json());

const routes = require('./routers');
app.use(routes);


const prisma = require('./databases');
prisma.$connect()
.then(() => console.log('Database is connected'))
.catch((error) => console.log(error));
