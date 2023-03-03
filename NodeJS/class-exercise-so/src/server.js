const express = require('express')
const app = express()


app.listen(3000, console.log("server is connect"));

app.use(express.json());

const routes = require('./routers');
app.use(routes);

