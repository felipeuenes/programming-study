const express = require('express');
const app = express()

app.listen(4000, console.log('Server is running on port 4000'));


const routes = require('./routes')
app.use(routes);
