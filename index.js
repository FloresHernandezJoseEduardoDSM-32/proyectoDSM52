const express = require('express');
const routes = require('./routes');

const app = express();
const port = 4000;

app.use('/',routes)

app.listen(port,() => {   
    console.log(`esta en http://localhost:${port}`);
});